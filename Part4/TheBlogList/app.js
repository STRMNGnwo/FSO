const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const config=require("./utils/config.js");
const blogRouter=require("./routes/api.js");

const app=express(); //actually making an express app.

console.log(config.MONGODBURL);

const url=config.MONGODBURL

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(()=>console.log("Connected to the database")).catch((error)=>console.log(error.message));

//middleware
app.use(cors({origin:true}));
app.use(express.json());

//routes
app.use("/api",blogRouter);


module.exports=app;