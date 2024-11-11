import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

const getAllMemberFromDB = async () => {
  const result = await prisma.member.findMany();

  return result;
};

const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findFirstOrThrow({
    where: { memberId },
  });

  return result;
};

const updateMemberIntoDB = async (memberId: string, memberInfo: any) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  const result = await prisma.member.update({
    where: { memberId },
    data: memberInfo,
  });

  return result;
};

const deleteMemberFromDB = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  const result = await prisma.member.delete({
    where: { memberId },
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
