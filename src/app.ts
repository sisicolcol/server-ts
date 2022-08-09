import {Request,Response,NextFunction} from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import {sequelize} from "./models";

dotenv.config();

let express=require('express');
const app= express();
const router=express.Router();

app.use(bodyParser.json())
app.use(express.json());

app.get('/',(req:Request,res:Response,next:NextFunction) =>{
    res.send('express server start!');
});

app.listen(4000,async ()=>{
    console.log(`
    #############################################
        🛡️ Server listening on port: 4000 🛡️
    #############################################    
    `)

    await sequelize.authenticate()
        .then(async () => {
            console.log("connection success");
        })
        .catch((e)=>{
            console.log('TT : ' ,e);
        })
})