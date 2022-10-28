let id_ss, id_p, id_l
const postViewSS = (req, res) => {
    id_ss = req.body.id

    res.redirect('/viewss')
}
const getViewSS = (req, res) => {
    console.log(id_ss);
    res.redirect('/dashboard')
}
const postViewP = (req, res) => {
    id_p = req.body.id

    res.redirect('/viewp')
}
const getViewP = (req, res) => {
    console.log(id_p);
    res.redirect('/dashboard')
}
const postViewL = (req, res) => {
    id_l = req.body.id

    res.redirect('/viewl')
}
const getViewL = (req, res) => {
    console.log(id_l);
    res.redirect('/dashboard')
}
module.exports = {
    postViewSS,
    getViewSS,
    postViewP,
    getViewP,
    postViewL,
    getViewL
}