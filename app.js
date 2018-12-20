const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
const routes = require('./Controllers/routes')
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
const { Client } = require('pg');

const client = new Client({
    // connectionString: process.env.DATABASE_URL,
    connectionString: 'postgres://crmpgwoagempzj:995d13a456c8659e1055b493a6baab551aa07c00338fa02d818bd928320bccb0@ec2-23-21-201-12.compute-1.amazonaws.com:5432/da9vkfi2bdthr2',
    ssl: true,
});

client.connect();

app.use('/', routes)

app.listen(PORT, () => {
    console.log("Server Created at 5000")
})

module.exports = {
    client
};