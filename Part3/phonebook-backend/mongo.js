/* eslint-disable no-undef */ //mainly because it keeps saying process is undefined, but it is a NODE JS process and is used to access CLI arguments

/*

THIS FILE IS TO BE USED BY THIS PROJECT, EXCEPT FOR TESTING IF THE DATABASE IS CONNECTED WITH THE EXPRESS BACKEND.

*/

const mongoose=require("mongoose")

//in Exercise 3.12, contact details must be passed in as process argument values, in order


if(process.argv.length<3)
{
  console.log("Please provide your password when running the file using node <filename> <password>")
  
  process.exit(1)//stops the process from executing
}


const password=process.argv[2]

const url=`mongodb+srv://ThePhoneBookAdmin:${password}@cluster0.fwgbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//now to define a schema which can be used by documents in a collection

const Schema={
  name: String,
  number: String
}

//now to create a mongoose model (document object) that follows the Schema, a collection is also automatically created, if it does not exist.

const Contact= mongoose.model("Contact",Schema) //document called Contact, collection called contacts.

//now actually creating new Contact to be added to the database.

if((process.argv).length>3) //if proper arguments have been passed in, add contact to database
{
  const newContact= new Contact(
    {
      name:`${process.argv[3]}`,
      number:`${process.argv[4]}`
    }
  )

  newContact.save().then(()=>{
    console.log(`added ${newContact.name} number ${newContact.number} to the database`)
    mongoose.connection.close()
  })

}

else if((process.argv).length==3){
  Contact.find({}).then((result)=>{
    result.forEach((contact)=> console.log(`${contact.name} ${contact.number}`)) //printing out the details of each contact and then closing the connection to the cluster
    mongoose.connection.close()
  })  
}


