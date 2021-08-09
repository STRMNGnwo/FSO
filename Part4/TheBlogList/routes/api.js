const express=require("express");
const router=express.Router();
const Blog=require("../models/blog.js");

router.get("/blogs", (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })

  router.post("/blogs",(request,response)=>{

       const body=request.body; //should be a parsed json object
       
       const newBlog= new Blog({
           title:body.title,
           author:body.author,
           url:body.url,
           likes:body.likes
       })

       newBlog.save().then((document)=>{
           console.log(`${document.title} has been saved to the database`);
           response.json(document);
       }).catch((error)=>{
           console.log(error.message);
           response.status(403).json({message:"Something went wrong, please check if the title and url fields of the blog are empty."})
    })
  })

  module.exports=router;