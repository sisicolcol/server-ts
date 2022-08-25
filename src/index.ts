require('dotenv').config()
import { AppDataSource } from "./datasource"
import app from './app';
import {Request, Response} from "express";
import { router } from './routes/routes'
import * as jwt from "jsonwebtoken";
import "reflect-metadata";
import { nextTick } from "process";


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









// jwt test 
const posts = [
    {
        username:"kate",
        id:"1"
    },
    {
        username:"kate2",
        id:"2"
    },
]
app.get('/token/post',authenticateToken,(req,res)=>{
    res.json(posts.filter(post => post.username === req.body.name))
})
app.post('/testToken',(req:Request,res:Response)=>{
    const username = req.body.username;
    const user = {name : username};
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({token:token})
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

