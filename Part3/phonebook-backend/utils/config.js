require("dotenv").config() //importing the config method from dotenv module that moves all env variables defined in the .env file to process.

// eslint-disable-next-line no-undef
const MONGODBURI=process.MONGODBURI
// eslint-disable-next-line no-undef
const PORT =process.PORT

const config={
  MONGODBURI, //same as MONGODBURI:MONGODBURI
  PORT
}

module.exports= config