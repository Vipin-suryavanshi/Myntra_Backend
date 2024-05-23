// import express from express;
import Data from "./Data/Items.js"

 export  const GetAllData = ((req,res)=>{
      res.send(Data)
})

