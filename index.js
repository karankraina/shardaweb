
const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/home1', (req, res) => {
    res.render('home');
})
app.get('/home2', (req, res) => {
    res.render('home2');
})
app.listen(8080, () => {
    console.log("Server Created at 8080")
})