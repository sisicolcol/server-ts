import { Response, Request } from "express";
import { Member } from '../entity/Member';
import { AppDataSource } from "../datasource"
import { validate } from "class-validator";

class MemberController{
    static listAll = async()=>{
        
    }

    static getOneById = async() => {
        
    }

    // /api/auth/signup
    static newMember = async(req: Request, res: Response) => {
        console.log("회원가입");
        let {mem_id,password,mem_name,mem_phone,mem_gender,mem_card,mem_address} = req.body;
        const member = new Member();
        member.mem_id=mem_id;
        member.password=password;
        member.mem_name=mem_name;
        member.mem_phone=mem_phone;
        member.mem_gender=mem_gender;
        member.mem_card=mem_card;
        member.mem_address=mem_address;

        // validate if the parameters are ok
        // const errors = await validate(member);
        // if (errors.length >0){
        //     res.status(400).send(errors);
        //     return;
        // }

        // hash the password, to securely store on DB
        member.hashPassword();

        const mem_check = await  AppDataSource.manager.findOneBy(Member,{mem_id : mem_id});
        if(mem_check){
            res.status(400).send({msg:"member is already taken"});
        }else{
            const response = await AppDataSource.manager.save(member);
            res.status(200).send(response);
        }
    }

    static editMember = async() => {
        
    }

    static deleteMember = async() => {
        
    }
}
export default MemberController;