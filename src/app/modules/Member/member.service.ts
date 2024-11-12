import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  const { isDeleted, ...rest } = result;
  return rest;
};

const getAllMemberFromDB = async () => {
  const result = await prisma.member.findMany({
    where: { isDeleted: false },
    select: {
      memberId: true,
      name: true,
      email: true,
      phone: true,
      membershipDate: true,
    },
  });

  return result;
};

const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findFirstOrThrow({
    where: { memberId, isDeleted: false },
  });

  const { isDeleted, ...rest } = result;
  return rest;
};

const updateMemberIntoDB = async (memberId: string, memberInfo: any) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId, isDeleted: false },
  });

  const result = await prisma.member.update({
    where: { memberId },
    data: memberInfo,
  });

  const { isDeleted, ...rest } = result;
  return rest;
};

const deleteMemberFromDB = async (memberId: string) => {
  // await prisma.member.findUniqueOrThrow({
  //   where: { memberId, isDeleted: false },
  // });

  // const result = await prisma.member.update({
  //   where: { memberId },
  //   data: { isDeleted: true },
  // });

  // return result;

  await prisma.member.findUniqueOrThrow({
    where: { memberId, isDeleted: false },
  });

  const result = await prisma.$transaction(async (ts) => {
    // soft delete on the member
    await ts.member.update({
      where: { memberId },
      data: { isDeleted: true },
    });

    // hard delete on all related borrow records
    await prisma.borrowRecord.deleteMany({
      where: { memberId },
    });
  });
  return result;
};

export const memberService = {
  createMemberIntoDB,
  getAllMemberFromDB,
  getMemberByIdFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
