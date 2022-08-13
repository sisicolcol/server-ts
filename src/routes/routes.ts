import { Router } from "express";
import {homeDetail} from '../controller/user'

const router = Router();

router.get('/home',homeDetail);

export {
    router
}