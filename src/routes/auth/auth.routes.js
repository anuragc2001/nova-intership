const express = require('express');
const route = new express.Router()

const {getLoginPage, postLogin} = require('../../controllers/auth/login.auth');

route.get('/login', getLoginPage)
route.post('/login', postLogin)

// route.get('/logout', postLogout)

module.exports = route