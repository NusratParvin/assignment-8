import express from "express";
import { memberController } from "./member.controller";

const router = express.Router();

router.post("/", memberController.createMember);
router.get("/", memberController.getAllMember);
router.get("/:memberId", memberController.getMemberById);
router.put("/:memberId", memberController.updateMember);
router.delete("/:memberId", memberController.deleteMember);

export const memberRoutes = router;
