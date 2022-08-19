import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import {validate} from "class-validator";
import { Member } from '../entity/Member';
import { AppDataSource } from "../datasource"
import MemberController from "./MemberController";
import jwtSecret from "../config/index";

class AuthController{
    static login = async(req : Request, res: Response)=>{
        // check if id, password are set
        let {mem_id,password} = req.body;
        console.log(mem_id,password);
        if(!(mem_id && password)){
            res.status(400).send();
        }

        let member: Member;
        // get member from db
        try {
            member = await AppDataSource.manager.findOneBy(Member,{mem_id : mem_id});
        } catch (error) {
            console.log(error);
            res.status(401).send();
        }

        // check if encrypted password match
        // if(!member.checkIfUnencryptedPasswordIsValid(password)){
        //     console.log("error : check if encrypted password match");
        //     res.status(401).send();
        //     return;
        // }

        // sing JWT, valid for 1 hr
        const token = jwt.sign(
            {mem_id: member.mem_id, mem_name: member.mem_name},
            jwtSecret,
            {expiresIn: "1h"}
        );

        // send jwt in the response
        console.log('HERE:',token);
        res.send(token);

    }

    static changePassword = async() => {

    }

}
export default AuthController;