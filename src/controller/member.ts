import { Response, Request } from "express";
import { Member } from '../entity/Member';
import { AppDataSource } from "../datasource"

const signup = async (req:Request,res:Response)=>{
    try{
        const member = new Member();
        member.mem_id=req.body.mem_id;
        member.password=req.body.password;
        member.mem_name=req.body.mem_name;
        member.mem_phone=req.body.mem_phone;
        member.mem_gender=req.body.mem_gender;
        member.mem_card=req.body.mem_card;
        member.mem_address=req.body.mem_address;
        await AppDataSource.manager.save(member);
        res.send({code:"200", msg:"create_success"});
    } catch (error){
        console.error(error);
    } 
}

export {
    signup
}