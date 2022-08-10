import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import {Request,Response,NextFunction} from "express";
import * as BodyParser from 'body-parser';
import * as cors from 'cors';

// import * as express from 'express';
let express=require('express');
const port = 8080;

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(cors());
    app.use(BodyParser.json());

    app.get('/',(req:Request,res:Response,next:NextFunction) =>{
        res.send('express server start!');
    });

    app.listen(port,()=> console.log(`App is running at port ${port}`));

}).catch(error => console.log(error))
