//already did this 
// Run the following commands in terminal:
//npm install express
//npm install express-handlebars
//if you have errors, run 
//sudo npm install express
//sudo npm install express-handlebars

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

const PORT = process.env.port || 3000

//Setup routes
app.get("/", (req,res)=>{
    const data = require('./data/homepage.json')
    res.render('homepage',{data})
})

app.get("/about", (req,res)=>{
    const data = require('./data/about.json')
    res.render('page',{data})
})

app.get("/category_1", (req,res)=>{
    const data = require('./data/category_1.json')
    res.render('category',{data})
})

app.get("/category_2", (req,res)=>{
    const data = require('./data/category_2.json')
    res.render('category',{data})
})

app.get("/category_3", (req,res)=>{
    const data = require('./data/category_3.json')
    res.render('category',{data})
})

//details page 
app.get("/category_1/details/:id", (req,res)=>{
    const data = require('./data/category_1.json')
    //filter to get only the data that matches the ID
    //temporary filter
    var tempData = {}
    tempData.products = data.products.filter((product)=>{
        return product.id == req.params.id
    })
    res.render('details',{"data":tempData})
})

//Cart data handling
let cart = {"products":[]}

app.get("/cart", (req,res) =>{
    if(typeof(req.params.id) != "undefined") {
        cart.products.push(req.query)
        console.log(req)
        console.log(req.query.name)
    } else{
        console.log(req)
        console.log(req.query.id)
        console.log(req.query.name)
    }
    res.render("cart",{"products":cart.products})
})

//Error handling -> app.use() basic express route
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error, req, res, next) => {
    console.log(error.message)
    res.status(500)
    res.render('500')
})


//Setup listener
app.listen(PORT, ()=>{
    console.log('Server started http://localhost:${PORT}')
    console.log('To close to press Ctrl-C')
})
