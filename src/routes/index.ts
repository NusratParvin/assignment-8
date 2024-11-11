import express from "express";
import { bookRoutes } from "../app/modules/Book/book.route";
import { memberRoutes } from "../app/modules/Member/member.route";
import { borrowReturnRoutes } from "../app/modules/BorrowReturn/borrowReturn.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowReturnRoutes,
  },
  {
    path: "/return",
    route: borrowReturnRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
