import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import jwtSecret from "../config/index";


export const checkJwt = (req:Request, res:Response, next:NextFunction) => {

    // get jwt token from the head
    const token = <string>req.headers["auth"];
    let jwtPayload;

    // validate token
    try {
        jwtPayload = <any>jwt.verify(token,jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        res.status(401).send();
        return;
    }

    // token valid for 1 hr
    const { mem_id, mem_name } = jwtPayload;
    const newToken = jwt.sign(
        {mem_id,mem_name},
        jwtSecret,
        {expiresIn : "1h"}
        );
    res.setHeader("token",newToken);

    next();

}