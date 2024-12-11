
//imports express into our project
const express = require('express')

const expressHandlebars = require('express-handlebars')

const app = express()

//Add body-parser to process POST data from forms
const bodyParser = require('body-parser')
//Body parser needs to be initialized
app.use(bodyParser.urlencoded({extended: true}))

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
//ends handlebar configuration

const handler = require('./lib/handler')

const PORT = process.env.port || 3000
app.get("/", (req, res) =>{
    res.render('page', {req})
})

app.get("/mad", (req, res) =>{
    const data = require("./data/mad-data.json")
    res.render('madform', {data})
})

app.post('/process', (req,res)=>{
    res.send('got post')
    console.log(req.query)
})

app.get('/process', (req, res)=>{
    console.log(req.query)
})

app.get('/newsletter-signup', handler.newsletterSignup)

app.post('/newsletter-signup/process', handler.newsletterSignupProcess)

app.get('/newsletter/list', handler.newsletterSignupList)

app.get('/newsletter/thankyou', (req,res) =>{
    res.render('thankyou')
})

//newsletter/details/?email=weifhew@wifhewi.com
app.get('/newsletter/details/:email', handler.newsletterUser)
app.get('/newsletter/delete/:email', handler.newsletterUserDelete)

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