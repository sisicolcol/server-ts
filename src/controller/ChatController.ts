require('dotenv').config();
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import {validate} from "class-validator";
import { Message } from '../entity/Message';
import { ChatRoom  } from '../entity/ChatRoom';
import { AppDataSource } from "../datasource"

export default class ChatController {
    constructor(){}

    public static getAllChats(req: Request, res: Response): void {
        
    }

    public static postChat(req: Request, res: Response): void {
        
    }

}