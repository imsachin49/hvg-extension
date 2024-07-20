const express=require("express");
const port=process.env.PORT||8080;

const app=express();




app.get("/",(req,res)=>{
    res.status(200).json({message:"Server Initilaized"});
})



app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})