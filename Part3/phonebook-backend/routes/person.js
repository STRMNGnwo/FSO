const express=require("express")
const router=express.Router()
const Contact=require("./models/Contact.js")

//NOTE:ALL ROUTER PATHS ARE RELATIVE. THE HOME URL HAS TO BE SPECIFIED IN INDEX.JS(using the imported Router from this module)
//assuming base URL is localhost:3001/api/person

router.get("/home",(request,response)=>{
  response.end("<h1>Hello World, from this API that gives you json data! </h1>")
})


router.get("/",(request,response,next)=>{ //this endpoint retrieves all Contacts in the contacts collection of the mongoDB database
  //return response.json(persons); //return is used here to stop execution at this point in this block
  Contact.find({}).then((data)=>{
    console.log(data)
    return response.json(data)
  }).catch((error)=>next(error)) //passing the error to the next() function, which would call either the default error handler or user defined error handler
})


router.get("/:id",(request,response,next)=>{ //get contact details of specified id.

  const ID=Number(request.params.id)
      
  Contact.find({_id:ID}).then((data)=>{
    console.log(data)
    if(data)
      return response.json(data)
  
    else
      return response.status(204).json({message:"The contact does not exist in the PhoneBook"})
  }).catch((error)=>next(error))
})


router.delete("/:id",(request,response,next)=>{
    
  //const id=Number(request.params.id); //id is not a number anymore
  const ID=request.params.id
  console.log(ID)

  Contact.deleteOne({_id:ID},(error,data)=>{
    if(error)
    {
      console.log(error)
      // return response.status(400).json({message:"`An error occurred before or during deletion`"})
      next(error)     
    }
    if(data.ok!=1||data.n!=1)
      return response.status(400).json({message:"The contact you are trying to delete does not exist in the PhoneBook"})

    return response.json({message:"The specified contact has been deleted from the PhoneBook"})
  })
}) /

router.put("/:id",(request,response,next)=>{

  const ID=request.params.id
  console.log("Updating for: ",ID)
  //const updatedData=request.body;

  Contact.updateOne({_id:ID},{name:request.body.name,number:request.body.number}, (error,data)=>{

    if(error)
    {
      console.log(error)
      //return response.status(400).json({message:error.message})
      next(error)
    }

    console.log(data)
         
    return response.json({message:"Successfully updated the document"})
  })
})


router.post("/",(request,response,next)=>{

  const contactDetails=request.body
  console.log(contactDetails)

  if(!contactDetails.name.trim()||!contactDetails.number.trim()) 
    return response.status(400).json({error:"Name or Number has not been provided"})

  console.log(contactDetails.name.toUpperCase())

  Contact.countDocuments({name:contactDetails.name},(error,data)=>{ //Checking uniqueness in backend, after its done in frontend as well.
    if(error){
      console.log(error)
      //return response.status(500).json({message:"An error occurred"})
      next(error)
    }
    if(data>0)
    {
      return response.status(400).json({message:"A contact with this name already exists in the PhoneBook"})
    }

    const newContact= new Contact({ //creating a new document that has to be added to the 
      name:contactDetails.name,
      number:contactDetails.number
    })

    newContact.save().then((data)=>{
      console.log(`${data.name} has been saved to the database`)
      return response.json(data)
    }).catch((error)=>{console.log("Contact cannot be saved");next(error)})
  })
})