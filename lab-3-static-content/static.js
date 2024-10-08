var name = "john"
var age = 23.5
let lastName = "Smith"
const year = 2024

const http = require('http')

const fs = require("fs")

const PORT = process.env.PORT || 8080
//The HTTP module can create an HTTP server that listens to server

//the callback is a function which executes after something else had completed
//syntax to create a function
const functionName = () => {
    //write the code to be executed by the function
    console.log("functionName was called")
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)
}

//Create a function to read files and display them
const displayPage = (path, res, contentType, responseCode = 200) => {
    fs.readFile(__dirname + path , (errors, content) =>  {
        if(errors){
            res.writeHead(500, {'Content-type' : 'text/plain'})
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, {"Content-Type" : contentType})
        res.end(content)
    })
}

//  "/public/home.html"

// Use the createServer() method to create an HTTP server:
const server = http.createServer((request, response) => {
    console.log("***************************")
    console.log("***************************")


    console.log(request.url)
    console.log(request.method)
    //GET POST BUT DELETE
    //GET => READ OPERATION OF A DATABASE
    //POST => CREATE "" ""
    //PUT => UPDATE
    //DELETE => DELETE

    //How to handle requests
    var path = request.url

    //ROUTING
    switch(path){
    case '':
    case '/':
    displayPage('/public/home.html', response, "text/html")
    break
    case '/about':
    displayPage('/public/about.html', response, "text/html")
    break
    case '/contact':
    displayPage('/public/contact.html', response, "text/html")
    break
    case '/logo':
    displayPage('/public/image.jpg', response, "image/jpg")
    break
    default:
    displayPage('/public/404.html', response, "text/html", 404)
    break
}
    console.log("Responding to request")
    
})

server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT} press Ctrl-C to terminate.....`))