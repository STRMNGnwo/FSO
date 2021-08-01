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

app.use(express.json()); //express middleware to parse incoming json data
app.use(cors({origin:"http://localhost:3000"}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))//morgan middleware to log stuff to the console


//time to make routes!

app.get("/",(request,response)=>{

    response.end("<h1>Hello World, from this API that gives you json data! </h1>");
})

app.get("/api/persons",(request,response)=>{ //this endpoint retrieves all Contacts in the contacts collection of the mongoDB database

      //return response.json(persons); //return is used here to stop execution at this point in this block
      Contact.find({}).then((data)=>{
           console.log(data);
          return response.json(data);
      })
})

app.get('/api/persons/:id',(request,response)=>{

    const ID=Number(request.params.id);
    
    Contact.find({id:ID}).then((data)=>{
        console.log(data);
        if(data)
       return response.json(data);
       else
       return response.status(204).json({message:"The contact does not exist in the PhoneBook"})
    })
    
})

app.get('/api/info',(request,response)=>{

    Contact.countDocuments({},(error,data)=>{

        if(error){
            console.log(error);
            return response.status(400).json({message:error.message});
        }

        const timeOfRequest=new Date()

        const sizeOfPhonebook=data;

        return response.end(`<p>Phonebook has info for ${sizeOfPhonebook} people </p> <p>${timeOfRequest}</p>`)

        
    })

})

app.delete('/api/persons/:id',(request,response)=>{
    
    const id=Number(request.params.id);
    console.log(id);
    const deleteContact=persons.find((person)=>person.id===id);

    if(!deleteContact) return response.status(400).json({error:"Person does not exist in the phonebook"});
    persons=persons.filter((person)=>person.id!==id);

    return response.end("Deletion completed");
})

app.post('/api/persons',(request,response)=>{

    const contactDetails=request.body;

    console.log(contactDetails);

    if(!contactDetails.name.trim()||!contactDetails.number.trim()) return response.status(400).json({error:"Name or Number has not been provided"})

    console.log(contactDetails.name.toUpperCase());

    Contact.countDocuments({name:contactDetails.name},(error,data)=>{
        if(error){
            console.log(error);
            return response.status(500).json({message:"An error occurred"})
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
app.listen(port,()=>console.log(`Server running at port ${port}`));


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

 /*var persons=[
    
        {
            id:1,
            name:"Arto Hellas",
            number:"87-33-1234567"

        },
        {
            id:2,
            name:"Ada Lovelace",
            number:"39-44-5223523"
        },
        {
            id:3,
            name:"Dan Abramov",
            number:"12-43-234345"
        },
        {
            id:4,
            name:"Mary Poppendick",
            number:"39-23-6423112"
        }

    ]*/