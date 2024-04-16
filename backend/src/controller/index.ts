import {Request, Response } from "express";
import { ZRequestBody } from "../types";


export const createText = (req:Request, res:Response) =>{

    try{
           let validateRequestBody = ZRequestBody.safeParse(req.body);
           if(!validateRequestBody?.success){
               return res.status(400).send({message:"Invalid request body"});
           }

           return res.status(200).send({status:200, text: req.body?.text})
    }
    catch(err){
        return res.status(500).send({err});
    }



}

