const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

const {about} = require('./controllers/about.controller');
const {index} = require('./controllers/index.controller');
const {contact} = require('./controllers/contact.controller');
const {download} = require('./controllers/download.controller');
const {faq} = require('./controllers/faq.controller');
const {lofttanks} = require('./controllers/lofttanks.controller');
const {plastictanks} = require('./controllers/plastictanks.controller');
const {ss} = require('./controllers/ss.controller');
const {why} = require('./controllers/why.controller');



app.set('view engine', 'ejs')
app.set(app.set('views', path.join(__dirname, '/views/templates/')));
app.use(express.static(path.join(__dirname, '/../public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.get('/', index)

app.get('/index.ejs', index)

app.get('/templates/why.ejs', why)

app.get('/templates/about.ejs', about)

app.get('/templates/contact.ejs', contact)

app.get('/templates/download.ejs', download)

app.get('/templates/faq.ejs', faq)

app.get('/templates/lofttanks.ejs', lofttanks)

app.get('/templates/plastictanks.ejs', plastictanks)

app.get('/templates/ss.ejs', ss)








app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
    mongoose.connect(process.env.MONGO_URI,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB Atlas Sever!!!')
        });
})