import {Request,Response,NextFunction} from "express";
let express=require('express');
let app= express();

app.get('/',(req:Request,res:Response,next:NextFunction) =>{
    res.send('express server start!~');
});

app.listen(4000,()=>{
    console.log(`
    #############################################
        🛡️ Server listening on port: 4000 🛡️
    #############################################    
    `)
})