const express = require('express');
const auth = require('../../middleware/auth');
const {dashboard} = require('../../controllers/admin/dashboard')
const {stainless} = require('../../controllers/admin/stainless')
const {loft} = require('../../controllers/admin/loft')
const {plastic} = require('../../controllers/admin/plastic')
const Add = require('../../controllers/admin/crud.add')
const Delete = require('../../controllers/admin/crud.delete')
const Update = require('../../controllers/admin/crud.update')
const View = require('../../controllers/admin/crud.view')
const route = new express.Router()

route.get("/dashboard", auth, dashboard);
route.get("/plastic", auth, plastic);
route.get("/stainless", auth, stainless);
route.get("/loft", auth, loft);

route.post("/viewss", auth, View.postViewSS);
route.get("/viewss", auth, View.getViewSS);
route.post("/viewp", auth, View.postViewP);
route.get("/viewp", auth, View.getViewP);
route.post("/viewl", auth, View.postViewL);
route.get("/viewl", auth, View.getViewL);

route.post("/addss", auth, Add.postAddSST);
route.get("/addss", auth, Add.getAddSST);
route.post("/addp", auth, Add.postAddPT);
route.get("/addp", auth, Add.getAddPT);
route.post("/addl", auth, Add.postAddLT);
route.get("/addl", auth, Add.getAddLT);

route.post("/updatess", loft);
route.post("/updatep", loft);
route.post("/updatel", loft);

route.post("/deletess", auth, Delete.postDeleteSS);
route.get("/deletess", auth, Delete.getDeleteSS);
route.post("/deletep", auth, Delete.postDeleteP);
route.get("/deletep", auth, Delete.getDeleteP);
route.post("/deletel", auth, Delete.postDeleteL);
route.get("/deletel", auth, Delete.getDeleteL);

// route.get('/productview', auth, (req, res) => {
//     res.render('admin/product', {u_name: req.User.adminName})
// })
// route.get("/dashboard", auth, dashboard);
// route.get("/dashboard", auth, dashboard);

module.exports = route