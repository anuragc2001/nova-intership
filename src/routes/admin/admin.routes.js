const express = require('express');
const auth = require('../../middleware/auth');
const {dashboard} = require('../../controllers/admin/dashboard')
const route = new express.Router()

route.get("/dashboard", auth, dashboard);

module.exports = route