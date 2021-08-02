require('dotenv').config()// using the dotenv package to access environment variables in an env file
const express=require('express') //importing the express module.

const app=express(); //initialsing an express app.
const cors=require('cors');
const port=process.env.PORT;//accessing port value using environment variable

const Contact=require('./models/contact.js')//now Contact should be a Mongoose model

var morgan=require('morgan')//importing the morgan logging middleware;

morgan.token('body',function(request){

    console.log(request.body);
   return JSON.stringify(request.body);
})

//user defined error handler method, everytime next(error) is invoked, this method should be called.
const errorHandler=(error,request,response,next)=>{
 
    console.log(error.name);
    console.log(error.message);
    return response.status(400).json({message:"Something went wrong"});
}

app.listen(port,()=>console.log(`Server running at port ${port}`));

app.use(express.json()); //express middleware to parse incoming json data
app.use(cors({origin:"http://localhost:3000"}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))//morgan middleware to log stuff to the console
app.use(errorHandler);

//time to make routes!

app.get("/",(request,response)=>{

    response.end("<h1>Hello World, from this API that gives you json data! </h1>");
})

app.get("/api/persons",(request,response,next)=>{ //this endpoint retrieves all Contacts in the contacts collection of the mongoDB database

      //return response.json(persons); //return is used here to stop execution at this point in this block
      Contact.find({}).then((data)=>{
           console.log(data);
          return response.json(data);
      }).catch((error)=>next(error)) //passing the error to the next() function, which would call either the default error handler or user defined error handler
})

//NOTE: Mongoose model methods can take a callback function with error and data as params, or can be used via promise syntax.
app.get('/api/persons/:id',(request,response,next)=>{

    const ID=Number(request.params.id);
    
    Contact.find({_id:ID}).then((data)=>{
        console.log(data);
        if(data)
       return response.json(data);
       else
       return response.status(204).json({message:"The contact does not exist in the PhoneBook"})
    }).catch((error)=>next(error))
})

app.get('/api/info',(request,response,next)=>{

    Contact.countDocuments({},(error,data)=>{
        if(error){
            console.log(error);
            //return response.status(400).json({message:error.message});
            next(error);
        }

        const timeOfRequest=new Date()
        const sizeOfPhonebook=data;
        return response.end(`<p>Phonebook has info for ${sizeOfPhonebook} people </p> <p>${timeOfRequest}</p>`)
    })
})

app.delete('/api/persons/:id',(request,response,next)=>{
    
    //const id=Number(request.params.id); //id is not a number anymore
    const ID=request.params.id;
    console.log(ID);

    Contact.deleteOne({_id:ID},(error,data)=>{
        if(error){
            console.log(error);
           // return response.status(400).json({message:"`An error occurred before or during deletion`"})
           next(error);        }
        if(data.ok!=1||data.n!=1)
        return response.status(400).json({message:"The contact you are trying to delete does not exist in the PhoneBook"})

        return response.json({message:"The specified contact has been deleted from the PhoneBook"})
    })
})

app.put("/api/persons/:id",(request,response,next)=>{

    const ID=request.params.id;
    console.log("Updating for: ",ID);
    //const updatedData=request.body;

    Contact.updateOne({_id:ID},{name:request.body.name,number:request.body.number}, (error,data)=>{

        if(error)
        {
          console.log(error);
          //return response.status(400).json({message:error.message})
          next(error);
        }

        //console.log(data);
         
        return response.json({message:"Successfully updated the document"})
    })
})

app.post('/api/persons',(request,response,next)=>{

    const contactDetails=request.body;
    console.log(contactDetails);

    if(!contactDetails.name.trim()||!contactDetails.number.trim()) 
    return response.status(400).json({error:"Name or Number has not been provided"})

    console.log(contactDetails.name.toUpperCase());

    Contact.countDocuments({name:contactDetails.name},(error,data)=>{ //This doesn't have to be done, as uniqueness is checked in the frontend as well, but just to be safe.
        if(error){
            console.log(error);
            //return response.status(500).json({message:"An error occurred"})
            next(error);
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
            console.log(`${data.name} has been saved to the database`);
            return response.json(data);
        })
    })
})





/*app.use(morgan(function(tokens,request,response){
     
    console.log("inside new morgan function");
    
    console.log("After creating a new morgan token");
    return[
        tokens.method(request,response),
        tokens.url(request,response),
        tokens.status(request,response),
        tokens.res(request, response, 'content-length'), '-',
        tokens.body(request,response)

    ]

    

})) //calling morgan to log messages to server console, based on the predefined tiny configuration.
*/

 