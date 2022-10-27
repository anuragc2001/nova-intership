const express = require('express');
const auth = require('../../middleware/auth');
const {dashboard} = require('../../controllers/admin/dashboard')
const {stainless} = require('../../controllers/admin/stainless')
const {loft} = require('../../controllers/admin/loft')
const {plastic} = require('../../controllers/admin/plastic')
const route = new express.Router()

route.get("/dashboard", auth, dashboard);
route.get("/plastic", auth, plastic);
route.get("/stainless", auth, stainless);
route.get("/loft", auth, loft);
// route.get("/dashboard", auth, dashboard);
// route.get("/dashboard", auth, dashboard);

module.exports = route