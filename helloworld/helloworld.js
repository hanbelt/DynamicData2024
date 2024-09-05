//Setup our server, whenever we set up a node application we will always need this 

//node does not require semi colons

//A few ways of declaring variables
var name = "john"
var age = 23.5
let lastName = "Smith"
const year = 2024

const http = require('http')

const PORT = process.env.PORT || 8080


//the callback is a function which executes after something else has completed

//Use the createServer() method to create an HTTP server:
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

    //ROUTING
    if(request.url == "/"){
        //execute the statement
        response.writeHead(200, {'Content-Type':'Text/Plain'})
        response.end('Contact Page')
    }

    else if(request.url == "/contact"){
        //execute the statement
        response.writeHead(200, {'Content-Type':'Text/Plain'})
        response.end('Contact Page')
    }

    else if(request.url == "/about"){
        //execute the statement
        response.writeHead(200, {'Content-Type':'Text/Plain'})
        response.end('About Page')
    }

    else if(request.url == "/gallery"){
        //execute the statement
        response.writeHead(200, {'Content-Type':'Text/Plain'})
        response.end('<html><head><title>Page Title,</title></head><body><h1>My first HTML response</h1></body></html>')
    }

    else {
        response.writeHead(400, {'Content-Type':'Text/Plain'})
        response.end("Page not found error 400")
    }


    //Basic conditions
    /**
     * Equals: if a == b (Equlas sign twice because = by itself is an assignment operator )
     *
     * Not Equal: if a != b 
     * 
     * Greater than: if a > b
     * 
     * Less than: if a < b
     * 
     * Greater than or equal: if a >= b
     * 
     * Less than or equal: if a <= b
     */


    console.log("Responding to request")
    


    console.log("***************************")
    console.log("***************************")
})

server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT} press Ctrl-C to terminate.....`))