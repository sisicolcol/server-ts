require('dotenv').config()
import { AppDataSource } from "./datasource"
import app from './app';
import {Request, Response} from "express";
import { router } from './routes/routes'
import * as jwt from "jsonwebtoken";
import "reflect-metadata";

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


app.use('/api/',router);

app.post('/testToken',(req:Request,res:Response)=>{
    const username = req.body.username;
    const user = {name : username};
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({token:token})
})