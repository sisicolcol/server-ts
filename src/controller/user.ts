import { Response, Request } from "express";
import { User } from '../entity/User';
import { getManager, getRepository, DataSource } from "typeorm";
import { AppDataSource } from "../data-source"

const homeDetail = async (req:Request, res:Response)=>{

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
    // let data = await AppDataSource.manager.find(User);

    // find by id
    // let data = await AppDataSource.manager.findOneBy(User,{id : 1});

    // truncate
    // let data = await AppDataSource.manager.clear(User);

    res.json({
        test:'ok',
    })
}

export {
    homeDetail
}