//imports express into our project
const express = require('express')

const app = express()

const PORT = process.env.port || 3000
//process routes

//Handle the error first

//NOT FOUND!
app.use( (request, response)=>{ 
    response.type('text/plain')
    response.status(404)
    response.send('404 not found')
})

//SERVER ERROR :(
    app.use((error, request, response, next)=>{
        console.log(error.message)
        response.type('text/plain')
        response.status(404)
        response.send('500 server error') 
    })

    app.listen(PORT, ()=>{
        console.log('Express is running on http://localhost:${PORT} ')
        console.log('Press ctrl-c to terminate')
    })