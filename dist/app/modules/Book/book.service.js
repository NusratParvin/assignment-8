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
exports.bookServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBookIntoDB = (bookInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data: bookInfo,
    });
    const { isDeleted } = result, rest = __rest(result, ["isDeleted"]);
    return rest;
});
const getAllBookFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany({
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
});
const getBookByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findFirstOrThrow({
        where: { bookId, isDeleted: false },
    });
    const { isDeleted } = result, rest = __rest(result, ["isDeleted"]);
    return rest;
});
const updateBookIntoDB = (bookId, bookInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUniqueOrThrow({
        where: { bookId },
    });
    if (book.isDeleted) {
        throw {
            status: 404,
            success: false,
            message: "Book has been deleted",
        };
    }
    const result = yield prisma_1.default.book.update({
        where: { bookId },
        data: bookInfo,
    });
    const { isDeleted } = result, rest = __rest(result, ["isDeleted"]);
    return rest;
});
// const deleteBookFromDB = async (bookId: string) => {
//   await prisma.book.findUniqueOrThrow({
//     where: { bookId },
//   });
//   const result = await prisma.book.delete({
//     where: { bookId },
//   });
//   return result;
// };
const deleteBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the book exists
    const book = yield prisma_1.default.book.findUniqueOrThrow({
        where: { bookId },
    });
    // if (book.isDeleted) {
    //   throw {
    //     status: 404,
    //     success: false,
    //     message: "Book has been deleted",
    //   };
    // }
    const result = yield prisma_1.default.$transaction((ts) => __awaiter(void 0, void 0, void 0, function* () {
        // soft delete on the book
        yield ts.book.update({
            where: { bookId },
            data: { isDeleted: true },
        });
        // hard delete on all related borrow records
        yield prisma_1.default.borrowRecord.deleteMany({
            where: { bookId },
            // data: { isDeleted: true },
        });
    }));
    return result;
});
exports.bookServices = {
    createBookIntoDB,
    getAllBookFromDB,
    getBookByIdFromDB,
    updateBookIntoDB,
    deleteBookFromDB,
};
