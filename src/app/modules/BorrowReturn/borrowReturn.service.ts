import prisma from "../../../shared/prisma";

const createBorrowIntoDB = async (borrowInfo: any) => {
  const { bookId, memberId } = borrowInfo;

  //check book exists and available copies
  const book = await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  if (book.availableCopies <= 0) {
    throw new Error("Book not available for borrowing");
  }

  // Check if the member exists
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  const result = await prisma.$transaction(async (ts) => {
    // Create the BorrowRecord
    const borrowRecord = await ts.borrowRecord.create({
      data: borrowInfo,
    });

    await ts.book.update({
      where: { bookId },
      data: {
        availableCopies: {
          decrement: 1,
        },
      },
    });

    const { returnDate, ...borrowRecordData } = borrowRecord;
    return borrowRecordData;
  });

  console.log(result);
  return result;
};

const returnBookIntoDB = async (borrowId: string) => {
  //check record exists
  const borrowRecord = await prisma.borrowRecord.findUniqueOrThrow({
    where: { borrowId },
  });

  // Check if the book has already been returned
  if (borrowRecord.returnDate) {
    throw new Error("Book has already been returned");
  }

  const result = await prisma.$transaction(async (ts) => {
    await ts.borrowRecord.update({
      where: { borrowId },
      data: {
        returnDate: new Date(),
      },
    });

    await ts.book.update({
      where: { bookId: borrowRecord.bookId },
      data: {
        availableCopies: {
          increment: 1,
        },
      },
    });
  });
  return result;
};

const getOverdueBorrowListFromDB = async () => {
  const currentDate = new Date();

  // Retrieve all borrow records with overdue logic applied in JavaScript.
  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lt: new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000),
      },
    },
    include: {
      book: { select: { title: true } },
      member: { select: { name: true } },
    },
  });

  const filteredBorrowRecords = overdueRecords.filter(
    (borrowRecord) => borrowRecord.returnDate === null
  );

  return filteredBorrowRecords.map((record) => {
    const overdueDays = Math.floor(
      (currentDate.getTime() - record.borrowDate.getTime()) /
        (1000 * 60 * 60 * 24) -
        14
    );

    return {
      borrowId: record.borrowId,
      bookTitle: record.book && record.book.title,
      borrowerName: record.member && record.member.name,
      overdueDays,
    };
  });
};

export const borrowReturnService = {
  createBorrowIntoDB,
  returnBookIntoDB,
  getOverdueBorrowListFromDB,
};
