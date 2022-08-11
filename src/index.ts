import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
// import {Request,Response,NextFunction} from "express";
// import * as BodyParser from 'body-parser';
// import * as cors from 'cors';
import app from './app';

const port = 8080;

AppDataSource
    .initialize()
    .then(()=>{
        console.log("Data Source has been initialized!")
    })
    .catch((err)=>{
        console.error("Error during Data Source initialization:", err)
    })
 
app.listen(port,()=> console.log(`App is running at port ${port}`));
