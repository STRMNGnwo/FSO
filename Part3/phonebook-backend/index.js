const express=require('express') //importing the express module.

const app=express(); //initialsing an express app.
const port=3001;

const persons=[
    
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

    ]

//time to make routes!

app.get("/",(request,response)=>{

    response.end("<h1>Hello World, from this API that gives you json data! </h1>");
})

app.get("/api/persons",(request,response)=>{

    return response.json(persons); //return is used here to stop execution at this point in this block
})

app.get('/api/persons/:id',(request,response)=>{

    const id=Number(request.params.id);
    const returnPerson= persons.find((person)=>person.id===id);
    console.log(returnPerson);
    if(!returnPerson)return response.status(204).end("Person cannot be found in the phonebook")
    
   
    return response.json(returnPerson)
    
})

app.get('/api/info',(request,response)=>{

    const sizeOfPhonebook=notes.length;
    const timeOfRequest=new Date()

    console.log(timeOfRequest);

    return response.end(`<p>Phonebook has info for ${sizeOfPhonebook} people </p> <p>${timeOfRequest}</p>`)
})

app.listen(port,()=>console.log(`Server running at port ${port}`));


