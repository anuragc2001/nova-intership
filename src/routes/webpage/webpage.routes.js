const express = require('express')
const route = new express.Router()

const {about} = require('../../controllers/webpage/about.controller');
const {index} = require('../../controllers/webpage/index.controller');
const {contact} = require('../../controllers/webpage/contact.controller');
const {download} = require('../../controllers/webpage/download.controller');
const {faq} = require('../../controllers/webpage/faq.controller');
const {lofttanks} = require('../../controllers/webpage/lofttanks.controller');
const {plastictanks} = require('../../controllers/webpage/plastictanks.controller');
const {ss} = require('../../controllers/webpage/ss.controller');
const {why} = require('../../controllers/webpage/why.controller');


route.get('/', index)

route.get('/index', (req, res) => {
    res.redirect('/')
})

route.get('/why', why)

route.get('/about', about)

route.get('/contact', contact)

route.get('/download', download)

route.get('/faq', faq)

route.get('/lofttanks', lofttanks)

route.get('/plastictanks', plastictanks)

route.get('/stainlesssteeltanks', ss)

module.exports = route