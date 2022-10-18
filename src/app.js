const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3000


const app = express();


// app.use(express.static(path.join(__dirname, '/../public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})