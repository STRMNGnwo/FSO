
const mongoose=require('mongoose')

const url=process.env.MONGODB_URI;

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(()=>{
    console.log("Connected to the MongoDB Database cluster");
}).catch((error)=>{
    console.log(error.message);
})

//creating a new schema

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        required:true
    },
    number:{
        type:String,
        minLength:8,
        required:true
    }
})

contactSchema.set("toJSON",{
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Contact=mongoose.model('Contact',contactSchema)
//exporting the mongoose model as a Node module using CJS convention
module.exports=Contact;