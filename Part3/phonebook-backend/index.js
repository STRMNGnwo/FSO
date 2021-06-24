const express=require('express') //importing the express module.

const app=express(); //initialsing an express app.
const port=3001;

const notes=[
    
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

    return response.json(notes); //return is used here to stop execution at this point in this block
})

app.listen(port,()=>console.log(`Server running at port ${port}`));


