import express from 'express';
import { handleGlobalError, invalidAPIcall } from './global-errors';
import router from "./router";
import cors from "cors";


const app = express();

app.use(cors({
    origin: ["http://localhost:3000"]
}));

app.use(express.json());

app.use("/api", router);

app.use("*", invalidAPIcall);

app.use(handleGlobalError);

app.listen(7000, ()=>{
   console.log("Server is running on port 7000");
})