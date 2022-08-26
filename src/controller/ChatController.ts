require('dotenv').config()
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import {validate} from "class-validator";
import { Member } from '../entity/Member';
import { AppDataSource } from "../datasource"

export default class ChatController{


}