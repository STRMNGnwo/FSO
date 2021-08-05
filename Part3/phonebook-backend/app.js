
const express=require("express") //importing the express module.
const app=express() //initialsing an express app.
const cors=require("cors")
const config=require("./utils/config.js")
const middleware=require("./utils/middleware.js")
const contactRouter=require("./routes/person.js")
const phonebookInfoRouter=require("./routes/info.js")
const mongoose=require("mongoose")


//establish mongoose connection

mongoose.connect(config.MONGODBURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(()=>{
  console.log("Connected to the MongoDB Database cluster")
}).catch((error)=>{
  console.log(error.message)
})


var morgan=require("morgan")//importing the morgan logging middleware;

morgan.token("body",function(request){
  console.log(request.body)
  return JSON.stringify(request.body)
})


//middleware packages

app.use(express.json()) //express middleware to parse incoming json data
app.use(cors({origin:"http://localhost:3000"}))
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))//morgan middleware to log stuff to the console


//ROUTES(basically if baseURL/api/person/something is called, use contactRouter to obtain the correct route)

app.use("/api/person",contactRouter)
app.use("/api/info",phonebookInfoRouter)


//error handler middleware defined by me
app.use(middleware.errorHandler)





/*app.use(morgan(function(tokens,request,response){
     
    console.log("inside new morgan function")
    
    console.log("After creating a new morgan token")
    return[
        tokens.method(request,response),
        tokens.url(request,response),
        tokens.status(request,response),
        tokens.res(request, response, 'content-length'), '-',
        tokens.body(request,response)

    ]

    

})) //calling morgan to log messages to server console, based on the predefined tiny configuration.
*/

 
module.exports=app //exporting the express application