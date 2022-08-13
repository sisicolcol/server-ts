import { Router } from "express";
import {getDetail,postDetail,deleteDetail} from '../controller/user'

const router = Router();

router.get('/test',getDetail);
router.post('/test',postDetail);
router.delete('/test',deleteDetail);

export {
    router
}