require('dotenv').config()
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";


export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    //Get the jwt token from the head
    const authHeader = <string>req.headers["authorization"];
    let jwtPayload;

    if(authHeader){
      const token = authHeader.split(' ')[1];
      try {
        jwtPayload = <any>jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        res.locals.jwtPayload = jwtPayload;
      } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
      }
    }
    
  
    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { mem_id, mem_type } = jwtPayload;
    const newToken = jwt.sign({ mem_id, mem_type }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h"
    });
    // console.log('newToken:',newToken);
    // console.log('mem_id:',mem_id);
    // console.log('mem_type:',mem_type);
    res.setHeader("token", newToken);
  
    //Call the next middleware or controller
    next();
  };