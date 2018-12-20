var express = require('express');
var router = express.Router();
const application = require('./application')
const db = require('./database')

/* GET users listing. */
router.get('/', function (req, res) {
    application.homebar(req, res)
});
router.get('/check', checkauth, function (req, res) {
    application.signup(req, res)
});
router.post('/db', function (req, res) {
    db.check(req, res)
});
router.get('/db', function (req, res) {
    res.render('db', {layout: 'homepage'})
});

function checkauth(req, res, next){
    // res.end('jsalfdk')
    req.sessions = 'hello';
    next()
}

module.exports = router;
/*
app.get('/', (req, res) => {
    //console.log(k)
    application.homebar(req, res)
    
});
// Vaakh Code
app.get('/vaakh', (req, res) => {
    // console.log(req.query.number);
    application.runapplication(req, res)
})
app.get('/check', (req, res) => {
    // console.log(req.query.number);
    application.checkfun(req, res)
})

module.exports = app;*/