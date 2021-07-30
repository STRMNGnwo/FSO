const express=require('express') //importing the express module.

const app=express(); //initialsing an express app.
const port=3001;

const mongoose=require('mongoose');
var morgan=require('morgan')//importing the morgan logging middleware;

morgan.token('body',function(request){

    console.log(request.body);
   return JSON.stringify(request.body);
})

app.use(express.json()); //express middleware to parse incoming json data
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))//morgan middleware to log stuff to the console


//time to make routes!

app.get("/",(request,response)=>{

    response.end("<h1>Hello World, from this API that gives you json data! </h1>");
})

app.get("/api/persons",(request,response)=>{ //this endpoint retrieves all Contacts in the contacts collection of the mongoDB database

      return response.json(persons); //return is used here to stop execution at this point in this block
})

app.get('/api/persons/:id',(request,response)=>{

    const id=Number(request.params.id);
    const returnPerson= persons.find((person)=>person.id===id);
    console.log(returnPerson);
    if(!returnPerson)return response.status(400).json({error:"Person cannot be found in the phonebook"})
    
   
    return response.json(returnPerson)
    
})

app.get('/api/info',(request,response)=>{

    const sizeOfPhonebook=persons.length;
    const timeOfRequest=new Date()

    console.log(timeOfRequest);

    return response.end(`<p>Phonebook has info for ${sizeOfPhonebook} people </p> <p>${timeOfRequest}</p>`)
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

    const newContact=request.body;

    console.log(newContact);

    if(!newContact.name.trim()||!newContact.number.trim()) return response.status(400).json({error:"Name or Number has not been provided"})

    console.log(newContact.name.toUpperCase());
    
    const uniqueContact=persons.find((person)=>(person.name.toUpperCase())===(newContact.name.toUpperCase()) )

    console.log(uniqueContact);

    if(uniqueContact!==undefined) return response.status(400).json({error:"Name must be Unique"});
    

    newContact.id=Math.round((Math.random()*10000)+persons.length);
    newContact.important=request.body.important||false;

    persons=persons.concat(newContact);

    return response.json(persons);
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