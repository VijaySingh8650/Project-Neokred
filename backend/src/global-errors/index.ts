import { ErrorRequestHandler, Request, Response } from "express";


export const invalidAPIcall = (req:Request, res:Response) =>{

    res.status(404).send({message : "URL not found"});

}

export const handleGlobalError = (err:ErrorRequestHandler, req:Request, res:Response) =>{

    res.status(500).send({message:"Something went wrong"});
    
}