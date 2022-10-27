const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const mongodbStore = require('connect-mongodb-session')(session)
require('dotenv').config();

const webpageRoute = require('./routes/webpage/webpage.routes')
const authRoute = require('./routes/auth/auth.routes')
const adminRoute = require('./routes/admin/admin.routes')

const port = process.env.PORT || 3000;
const app = express();

const store = new mongodbStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions'
})

app.use(session({ secret: "secretkey", resave: false, saveUninitialized: false, store: store, cookie: {maxAge: 12 * 60 * 60 * 1000}}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/../public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(webpageRoute)
app.use(authRoute)
app.use(adminRoute)


app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
    mongoose.connect(process.env.MONGO_URI,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB Atlas Sever!!!')
        });
})