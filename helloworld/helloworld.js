//Setup our server, whenever we set up a node application we will always need this 

//node does not require semi colons

//A few ways of declaring variables
var name = "john"
var age = 23.5
let lastName = "Smith"
const year = 2024

const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((request, response) => {
    console.log(request)
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.end('Hello World')
})

server.listen(PORT, ()=> console.log(`server started on port ${PORT} press Ctrl-C to terminate.....`))