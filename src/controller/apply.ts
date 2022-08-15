import {Response,Request} from "express";
import {Apply} from "../entity/Apply";
import {AppDataSource} from "../data-source";

const getQuickApply = async (req:Request,res:Response)=>{
    let data=await AppDataSource.manager.find(Apply);


}

const getApply = async (req:Request,res:Response)=>{
    let data=await AppDataSource.manager.find(Apply);


}

const addApply = async (req:Request,res:Response)=>{
    try{
        const apply = new Apply();
        apply.service_date=req.body.service_date;
        apply.service_time=req.body.service_time;
        apply.start_point=req.body.start_point;
        apply.end_point=req.body.end_point;
        apply.duration=req.body.duration;
        apply.precaution=req.body.precaution;
        apply.way=req.body.way;
        apply.mem_id=req.body.mem_id;
        await AppDataSource.manager.save(apply);
        res.send({code:"200",message:"create apply success"})
    }catch(err){
        console.log(err);
    }

}

export {
    addApply,getQuickApply,
}