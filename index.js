const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
const application = require('./Controllers/application')
var exphbs = require('express-handlebars');
var url = require('url');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));



     
app.get('/', (req, res) => {
    var k = url.parse(req.url)
    //console.log(k)
    
    //console.log(typeof k.name);
    res.render('home');
});
// Vaakh Code
app.get('/vaakh', (req, res) => {
    // console.log(req.query.number);
    application.runapplication(req, res)
})

app.listen(PORT, () => {
    console.log("Server Created at 5000")
})

