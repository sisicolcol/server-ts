import {Request,Response,NextFunction} from "express";
// import "reflect-metadata";
// import {DataSource} from "typeorm";
// import {AppDataSource} from './data-source';
let express=require('express');
let app= express();
// app.use(express.json());
// const port=3000;


app.get('/',(req:Request,res:Response,next:NextFunction) =>{
    res.send('express server start!');
});

app.listen(4000,()=>{
    console.log(`
    #############################################
        🛡️ Server listening on port: 4000 🛡️
    #############################################    
    `)
})