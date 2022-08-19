import { Router } from "express";
import MemberController from "../controller/MemberController";
import { checkJwt } from "../middlewares/checkJwt";
// import { checkRole } from "../middlewares/checkRole";

const router = Router();

// get all members
router.get("/",[checkJwt],MemberController.listAll);

// get one member
router.get("/:id([0-9]+)",[checkJwt],MemberController.getOneById);

// create new member
router.post("/",[checkJwt],MemberController.newMember);

// edit member
router.patch("/:id([0-9]+)",[checkJwt],MemberController.editMember);

// delete member
router.delete("/:id([0-9]+)",[checkJwt],MemberController.deleteMember);

export default router;