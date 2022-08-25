import { Router } from "express";
import AuthController from "../controller/AuthController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

// login
router.post("/login",AuthController.login);

// change password
router.post("/change-pwd",[checkJwt],AuthController.changePassword)

export default router;