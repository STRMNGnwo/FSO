
//user defined error handler method, everytime next(error) is invoked, this method should be called.
const errorHandler=(error,request,response,next)=>{

  console.log("HANDLING THE ERROR")
  //console.log(error.name);
  //console.log(error.message);
  if (error.name === "CastError")
  {
    return response.status(400).send({ error: "malformatted id" })
  } 
  
  else if (error.name === "ValidationError") {
  
    console.log("Encountered a Validation error")
    console.log(error.message)
    return response.status(400).json({ message: "Validation Error" })
  }
  //if error is not both of the above scenarios, pass the error to the default express error handler
  next(error)
  //return response.status(400).json({message:"Something went wrong"});
}

module.exports={
  errorHandler
}