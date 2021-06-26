const express = require('express')
const app = express()

const people = require('./data')
const zoo = require('./zoo')


const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.render('home.ejs', {data: people})
})

app.get('/zoo', (req, res)=>{
    res.render('zoo.ejs', {zooData: zoo})
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})