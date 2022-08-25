import {Response,Request} from "express";
import {Apply} from "../entity/Apply";
import {AppDataSource} from "../datasource";
import {ApplyRepository} from "../repository/ApplyRepository";

const getQuickApply = async (req:Request,res:Response)=>{//퀵 지원목록 조회
    try {
        let data = await ApplyRepository.findQuickApply();

        res.status(200).send({state:"ok",data:{data}});

    }catch (err){
        res.status(500).send({error:{err}});
        console.log(err);
    }

}

const getPreApply = async (req:Request,res:Response)=>{ // 사전예약 지원 목록 조회
    try{
        let data=await ApplyRepository.findPreApply();

        res.status(200).send({state:"ok",data:{data}})
    }catch (err){
        res.status(500).send({error:{err}});
        console.log(err);
    }



}

const addApply = async (req:Request,res:Response)=>{
    try{
        const apply = new Apply();
        apply.service_date=req.body.service_date;
        apply.service_time=req.body.service_time;
        apply.start_point=req.body.start_point;
        apply.end_point=req.body.end_point;
        apply.duration=req.body.duration;
        apply.contents=req.body.contents;
        apply.details=req.body.details;
        apply.way=req.body.way;
        apply.mem_id=req.body.mem_id;

        await AppDataSource.manager.save(apply);

        res.status(200).send({state:"ok",message:"create apply success"})
    }catch(err){
        res.status(500).send({error:{err}});
        console.log(err);
    }

}

const getMyApply=async (req:Request,res:Response)=>{// 시각장애인 본인의 지원 조회
    try {
        let resource = await ApplyRepository.findByMem_Id(Number(req.params.mem_id));
        res.send({state:"ok",data:{resource}});
    }catch(err){
        res.status(500).send({error:{err}});
        console.log(err);
    }

}

export {
    addApply,getQuickApply,getPreApply,getMyApply
}