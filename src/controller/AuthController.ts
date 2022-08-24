require('dotenv').config()
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import {validate} from "class-validator";
import { Member } from '../entity/Member';
import { AppDataSource } from "../datasource"
import MemberController from "./MemberController";
import jwtSecret from "../config/index";

class AuthController{

    // api/auth/login
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
            console.log(member);
        } catch (error) {
            console.log(error);
            res.status(401).send();
        }

        // check if encrypted password match
        if(!member.checkIfUnencryptedPasswordIsValid(password)){
            console.log("error : check if encrypted password match");
            res.status(401).send();
            return;
        }

        // AuthController.signJwt(member,res);

        //Sing JWT, valid for 1 hour
        const payload={mem_id:member.mem_id}
        const token = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET
        );
    
        //Send the jwt in the response
        res.send(token);

    }

    static signJwt(member: Member, res){
        console.log("jwt member:",member);
        // const payload = { mem_id : member.mem_id.toString()};
        // const token = jwt.sign(
        //     payload.toString(),
        //     jwtSecret,
        //     // { expiresIn: 60 * 60},
        //     // (err,token)=>{
        //     //     if(err){
        //     //         console.log(err);
        //     //         res.status(401).json({success:false})
        //     //     } else {
        //     //         console.log(token);
        //     //     }
        //     // }
        // );

        const token = jwt.sign(
            {mem_id: member.mem_id, mem_name: member.mem_name}.toString(),
            jwtSecret,
            {expiresIn: "1h"}
        );

        console.log('Token: ',token);

        try {
            // send jwt 
            res.send({
                jwt: token,
            });
        } catch (error) {
            res.status(401).send();
        }
    }

    static changePassword = async() => {

    }

}
export default AuthController;