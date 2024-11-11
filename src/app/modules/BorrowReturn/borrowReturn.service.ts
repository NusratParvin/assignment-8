import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBorrowIntoDB = async (borrowInfo: any) => {
  const { bookId, memberId } = borrowInfo;
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  const result = await prisma.borrowRecord.create({
    data: borrowInfo,
  });

  const { returnDate, ...rest } = result;

  return rest;
};

export const borrowReturnService = {
  createBorrowIntoDB,
};
