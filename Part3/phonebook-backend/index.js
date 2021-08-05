const app=require("./app.js") //importing the express application
var http=require("http")
const config=require("./utils/config")

var server=http.createServer(app)

server.listen(config.PORT,()=>console.log(`Server running on port: ${config.PORT}`))
