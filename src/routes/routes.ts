import { Router } from "express";
import {addApply, getMyApply, getPreApply, getQuickApply} from "../controller/apply";
import auth from './auth';
import member from './member';

const router = Router();

//login
router.use("/auth",auth);

//signup
router.use("/auth",member);


router.post('/user/apply',addApply)//시각장애인 활동지원서비스 신청하기

router.get('/user/applylist/:mem_id',getMyApply);//나의 신청목록

router.get('/apply/quick/inquire',getQuickApply);//퀵 활동지원서비스 _목록조회

router.get('/apply/pre/inquire',getPreApply);//사전예약활동지원서비스_목록조회

export {
    router
}