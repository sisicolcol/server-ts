import { Router } from "express";
import {addApply, getMyApply, getQuickApply} from "../controller/apply";

const router = Router();

router.post('/user/apply',addApply)

router.get('/user/applylist/:mem_id',getMyApply);

router.get('/apply/quick/inquire',getQuickApply);

export {
    router
}