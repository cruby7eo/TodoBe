const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
require('dotenv').config();
const cors = require('cors');


const app = express()

// const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD

app.use(cors())
app.use(bodyParser.json())
app.use('/api', indexRouter)

const mongoURI = "mongodb+srv://cruby7eo:3nhP_sM2w3ieKNk@cluster0.x8ui1.mongodb.net/todo-app" //MONGODB_URI_PROD

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(()=>{
        console.log("mongoose connected");
        
    })
    .catch((err)=>{
        console.log("db is not working");
        
    })
    
app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/about', function (req, res) {
    res.send('this is allabout express')
})

app.listen(5000, ()=>{
    console.log("server is on 5000");
    
})