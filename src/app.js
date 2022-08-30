const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./service/weather')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewscDirectoryPath = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewscDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App", 
        name: "K"
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: "About", 
        name: "K"
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "Help yourself",
        title: "Help", 
        name: "K"
    })
})

app.get('/weather', (req, res) => {
    var data = {}

    if (!req.query.address) {
        data = {
            error: "address term is required"
        }
    }

    weather(req.query.address, (error, data) => {
        if (error) {
            return res.send(error)
        }
        return res.send(data)
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        errorText: "Go help yourself with 404",
        title: "Help", 
        name: "K"
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        errorText: "404",
        title: "Help", 
        name: "K"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}.`)
})