//main starting point of the app.

const http=require('http');
const app=require("./app.js"); //importing the express app.

var port=3001;
http.createServer(app).listen(3001,()=>console.log("Server running on Port:",port));