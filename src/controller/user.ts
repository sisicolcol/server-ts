import { Response, Request } from "express";
import { User } from '../entity/User';
import { AppDataSource } from "../data-source"

const getDetail = async (req:Request, res:Response)=>{

    // save
    // const user = new User();
    // user.name='test';
    // user.email='test@gmail.com',
    // user.phone='00011112222';

    // await AppDataSource.manager.save(user);

    // update
    // let data = await AppDataSource.manager.update(User,2,{email:'mytest@gmail.com'})

    // delete
    // let data = await AppDataSource.manager.delete(User,2);

    // all find
    let data = await AppDataSource.manager.find(User);

    // find by id
    // let data = await AppDataSource.manager.findOneBy(User,{id : 1});

    // truncate
    // let data = await AppDataSource.manager.clear(User);

    res.json({
        test:'ok',
    })
}

const postDetail = async (req:Request, res: Response)=>{

    try{
        const user = new User();
        user.name=req.body.name;
        user.email=req.body.email;
        user.phone=req.body.phone;
        await AppDataSource.manager.save(user);
        res.send({code:"200", msg:"create_success"});
    } catch (error){
        console.error(error);
    }    

}

const deleteDetail = async (req:Request, res:Response)=>{
    try {
        await AppDataSource.manager.delete(User,req.body.id);
        res.send({code:"200", msg:"create_success"});
    } catch (error) {
        console.error(error);
    }
}

export {
    getDetail,
    postDetail,
    deleteDetail
}