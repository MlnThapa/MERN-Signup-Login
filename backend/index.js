const express = require('express');
const collection = require("./mongo");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        app.listen(PORT,()=>console.log(`connected to Port : ${PORT}`));
    }
).catch((error)=>{
    console.log(error)
})


app.get("/",cors(),(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.post("/",async(req,res)=>{
    const {email,password} = req.body;

    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }else{
            res.json("Doesn't exist")
        }
    }catch(e){
       res.json("error")
    }
})

app.post("/Signup",async(req,res)=>{
    const {email,password} = req.body;
    
    let data = {
        email: email,
        password: password
    }

    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }else{
            await collection.insertMany([data]);
        }
    }catch(e){
       res.json("error")
    }
})

