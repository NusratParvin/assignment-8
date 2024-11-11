import prisma from "../../../shared/prisma";

const createBookIntoDB = async (bookInfo: any) => {
  const result = await prisma.book.create({
    data: bookInfo,
  });

  return result;
};

const getAllBookFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findFirstOrThrow({
    where: { bookId },
  });

  return result;
};

const updateBookIntoDB = async (bookId: string, bookInfo: any) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  const result = await prisma.book.update({
    where: { bookId },
    data: bookInfo,
  });

  return result;
};

const deleteBookFromDB = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  const result = await prisma.book.delete({
    where: { bookId },
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
