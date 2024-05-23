import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { GetAllData } from "./process.js";
const server = express();
dotenv.config()
console.log(`App Url = ${process.env.App_url}`);
server.use(cors({
    origin:[process.env.App_url],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true,
}))
const port = process.env.PORT || 3000;
server.get("/GetAll",GetAllData)
server.listen(port,()=>{
    console.log(`your server is listen at portno: ${port}`);
})