import { Router } from "express";
import {getDetail,postDetail,deleteDetail} from '../controller/user'
import { signup } from "../controller/member";

const router = Router();

router.get('/test',getDetail);
router.post('/test',postDetail);
router.delete('/test',deleteDetail);

router.post('/auth/signup',signup);

export {
    router
}