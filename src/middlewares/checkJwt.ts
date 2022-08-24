require('dotenv').config()
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import jwtSecret from "../config/index";


export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    //Get the jwt token from the head
    const token = <string>req.headers["auth"];
    let jwtPayload;
    
    //Try to validate the token and get data
    try {
      jwtPayload = <any>jwt.verify(token, jwtSecret);
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      //If token is not valid, respond with 401 (unauthorized)
      res.status(401).send();
      return;
    }
  
    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { mem_id, mem_name } = jwtPayload;
    const newToken = jwt.sign({ mem_id, mem_name }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h"
    });
    res.setHeader("token", newToken);
  
    //Call the next middleware or controller
    next();
  };