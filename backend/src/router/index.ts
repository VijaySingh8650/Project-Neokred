import express from "express";
import {createText} from "../controller";

const app = express.Router();

app.route("/text").post(createText);


export default app;