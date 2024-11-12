import prisma from "../../../shared/prisma";

const createBookIntoDB = async (bookInfo: any) => {
  const result = await prisma.book.create({
    data: bookInfo,
  });

  const { isDeleted, ...rest } = result;
  return rest;
};

const getAllBookFromDB = async () => {
  const result = await prisma.book.findMany({
    where: { isDeleted: false },
    select: {
      bookId: true,
      title: true,
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    },
  });

  return result;
};

const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findFirstOrThrow({
    where: { bookId, isDeleted: false },
  });
  const { isDeleted, ...rest } = result;
  return rest;
};

const updateBookIntoDB = async (bookId: string, bookInfo: any) => {
  const book = await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  if (book.isDeleted) {
    throw {
      status: 404,
      success: false,
      message: "Book has been deleted",
    };
  }

  const result = await prisma.book.update({
    where: { bookId },
    data: bookInfo,
  });

  const { isDeleted, ...rest } = result;
  return rest;
};

// const deleteBookFromDB = async (bookId: string) => {
//   await prisma.book.findUniqueOrThrow({
//     where: { bookId },
//   });

//   const result = await prisma.book.delete({
//     where: { bookId },
//   });

//   return result;
// };

const deleteBookFromDB = async (bookId: string) => {
  // Check if the book exists
  const book = await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  // if (book.isDeleted) {
  //   throw {
  //     status: 404,
  //     success: false,
  //     message: "Book has been deleted",
  //   };
  // }

  const result = await prisma.$transaction(async (ts) => {
    // soft delete on the book
    await ts.book.update({
      where: { bookId },
      data: { isDeleted: true },
    });

    // hard delete on all related borrow records
    await prisma.borrowRecord.deleteMany({
      where: { bookId },
      // data: { isDeleted: true },
    });
  });
  return result;
};

export const bookServices = {
  createBookIntoDB,
  getAllBookFromDB,
  getBookByIdFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
