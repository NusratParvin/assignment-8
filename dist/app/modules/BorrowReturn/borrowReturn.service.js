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
exports.borrowReturnService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBorrowIntoDB = (borrowInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = borrowInfo;
    //check book exists and available copies
    const book = yield prisma_1.default.book.findUniqueOrThrow({
        where: { bookId },
    });
    if (book.availableCopies <= 0 || book.isDeleted == true) {
        throw new Error("Book not available for borrowing");
    }
    // Check if the member exists
    yield prisma_1.default.member.findUniqueOrThrow({
        where: { memberId, isDeleted: false },
    });
    const result = yield prisma_1.default.$transaction((ts) => __awaiter(void 0, void 0, void 0, function* () {
        // Create the BorrowRecord
        const borrowRecord = yield ts.borrowRecord.create({
            data: borrowInfo,
        });
        yield ts.book.update({
            where: { bookId },
            data: {
                availableCopies: {
                    decrement: 1,
                },
            },
        });
        const { returnDate } = borrowRecord, borrowRecordData = __rest(borrowRecord, ["returnDate"]);
        return borrowRecordData;
    }));
    console.log(result);
    return result;
});
const returnBookIntoDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    //check record exists
    const borrowRecord = yield prisma_1.default.borrowRecord.findUniqueOrThrow({
        where: { borrowId },
    });
    // Check if the book has already been returned
    if (borrowRecord.returnDate) {
        throw new Error("Book has already been returned");
    }
    const result = yield prisma_1.default.$transaction((ts) => __awaiter(void 0, void 0, void 0, function* () {
        yield ts.borrowRecord.update({
            where: { borrowId },
            data: {
                returnDate: new Date(),
            },
        });
        yield ts.book.update({
            where: { bookId: borrowRecord.bookId },
            data: {
                availableCopies: {
                    increment: 1,
                },
            },
        });
    }));
    return result;
});
const getOverdueBorrowListFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    // Retrieve all borrow records which extends 14 days
    const overdueRecords = yield prisma_1.default.borrowRecord.findMany({
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
    const filteredBorrowRecords = overdueRecords.filter((borrowRecord) => borrowRecord.returnDate === null);
    return filteredBorrowRecords.map((record) => {
        const overdueDays = Math.floor((currentDate.getTime() - record.borrowDate.getTime()) /
            (1000 * 60 * 60 * 24) -
            14);
        return {
            borrowId: record.borrowId,
            bookTitle: record.book && record.book.title,
            borrowerName: record.member && record.member.name,
            overdueDays,
        };
    });
});
exports.borrowReturnService = {
    createBorrowIntoDB,
    returnBookIntoDB,
    getOverdueBorrowListFromDB,
};
