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

route.post("/viewss", View.postViewSS);
route.get("/viewss", View.getViewSS);
route.post("/viewp", View.postViewP);
route.get("/viewp", View.getViewP);
route.post("/viewl", View.postViewL);
route.get("/viewl", View.getViewL);

route.post("/addss", Add.addSST);
route.post("/addp", Add.addPT);
route.post("/addl", Add.addLT);

route.post("/updatess", loft);
route.post("/updatep", loft);
route.post("/updatel", loft);

route.post("/deletess", Delete.postDeleteSS);
route.get("/deletess", Delete.getDeleteSS);
route.post("/deletep", Delete.postDeleteP);
route.get("/deletep", Delete.getDeleteP);
route.post("/deletel", Delete.postDeleteL);
route.get("/deletel", Delete.getDeleteL);
// route.get("/dashboard", auth, dashboard);
// route.get("/dashboard", auth, dashboard);

module.exports = route