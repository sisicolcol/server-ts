import { Router } from "express";
import ChatController from "../controller/ChatController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.get( "/chat",  checkJwt,  ChatController.getAllChats );
router.post( "/chat",  checkJwt,  ChatController.postChat );


export default router;