const express=require("express")
const router=express.Router()
const Contact= require("./models/Contact.js")

//assuming base URL from index.js is localhost:3001/api/info


router.get("/total",(request,response,next)=>{

  Contact.countDocuments({},(error,data)=>{
    if(error){
      console.log(error)
      //return response.status(400).json({message:error.message});
      next(error)
    }
    
    const timeOfRequest=new Date()
    const sizeOfPhonebook=data
    return response.end(`<p>Phonebook has info for ${sizeOfPhonebook} people </p> <p>${timeOfRequest}</p>`)
  })
})