const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')


const port = process.env.PORT || 3000;


const app = express();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/../public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/index.ejs',(req,res)=>{
    res.render('index');
})

app.get('/templates/why.ejs',(req,res)=>{
    res.render('why');
})

app.get('/templates/about.ejs',(req,res)=>{
    res.render('about');
})

app.get('/templates/contact.ejs',(req,res)=>{
    res.render('contact');
})


app.get('/templates/download.ejs',(req,res)=>{
    res.render('download');
})

app.get('/templates/faq.ejs',(req,res)=>{
    res.render('faq');
})

app.get('/templates/lofttanks.ejs',(req,res)=>{
    res.render('lofttanks');
})

app.get('/templates/plastictanks.ejs',(req,res)=>{
    res.render('plastictanks');
})

app.get('/templates/ss.ejs',(req,res)=>{
    res.render('ss');
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})