"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.create({
        data: payload,
    });
    const { isDeleted } = result, rest = __rest(result, ["isDeleted"]);
    return rest;
});
const getAllMemberFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findMany({
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
});
const getMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findFirstOrThrow({
        where: { memberId, isDeleted: false },
    });
    const { isDeleted } = result, rest = __rest(result, ["isDeleted"]);
    return rest;
});
const updateMemberIntoDB = (memberId, memberInfo) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.member.findUniqueOrThrow({
        where: { memberId, isDeleted: false },
    });
    const result = yield prisma_1.default.member.update({
        where: { memberId },
        data: memberInfo,
    });
    const { isDeleted } = result, rest = __rest(result, ["isDeleted"]);
    return rest;
});
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    // await prisma.member.findUniqueOrThrow({
    //   where: { memberId, isDeleted: false },
    // });
    // const result = await prisma.member.update({
    //   where: { memberId },
    //   data: { isDeleted: true },
    // });
    // return result;
    yield prisma_1.default.member.findUniqueOrThrow({
        where: { memberId, isDeleted: false },
    });
    const result = yield prisma_1.default.$transaction((ts) => __awaiter(void 0, void 0, void 0, function* () {
        // soft delete on the member
        yield ts.member.update({
            where: { memberId },
            data: { isDeleted: true },
        });
        // hard delete on all related borrow records
        yield prisma_1.default.borrowRecord.deleteMany({
            where: { memberId },
        });
    }));
    return result;
});
exports.memberService = {
    createMemberIntoDB,
    getAllMemberFromDB,
    getMemberByIdFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};
