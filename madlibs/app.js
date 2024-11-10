
//imports express into our project
const express = require('express')

const expressHandlebars = require('express-handlebars')

const app = express()

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
//ends handlebar configuration

const PORT = process.env.port || 8000
app.get("/", (req, res) =>{
    res.render('page', {req})
})

app.get("/mad", (req, res) =>{
    const data = require("./data/mad-data.json")
    res.render('madform', {data})
})

app.post('/process', (req,res)=>{
    res.send('got post')
})

app.get('/process', (req, res)=>{
    console.log(req.query)
})


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