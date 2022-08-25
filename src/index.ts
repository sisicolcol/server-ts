import { AppDataSource } from "./data-source"
import app from './app';
import {Request, Response} from "express";

const port = 3000;

AppDataSource
    .initialize()
    .then(()=>{
        console.log("Data Source has been initialized!")
    })
    .catch((err)=>{
        console.error("Error during Data Source initialization:", err)
    })
    
app.listen(port,()=> console.log(`App is running at port ${port}`));

app.get('/',(req:Request,res:Response)=>{
    res.send('hello');
})