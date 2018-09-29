
const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log("Server Created at 8080")
})