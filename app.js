require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David Bolivar',
        titulo: 'Viajando con'
    })
})

app.use(express.static('public'))


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'David Bolivar',
        titulo: 'Viajando con'
    })
})

/* 
app.get('/elements', function (req, res) {
    res.sendFile(__dirname +'/public/elements.html')
})
 */
/* app.get('/generic', function (req, res) {
    res.sendFile(__dirname +'/public/generic.html')
}) */

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'David Bolivar',
        titulo: 'Viajando con'
    })
})

app.listen(port)