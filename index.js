var express = require('express');
var app = express();
const contentful = require('contentful');
var exphbs = require('express-handlebars');

const client = contentful.createClient({
    space: 'cwb7iicmbjb5',
    //environment: '<environment_id>', // defaults to 'master' if not set
    accessToken: '4a0396e4e40273afa6e2cc7ba1b4d871ba2445e1fe072f0cd3b32b1aef6b0787'
})
// Head Data
 client.getEntry('1NmssqytK8yEMc0GIuusQo')
     .then((entry) => {
         app.locals.headerData = entry.fields;
         console.log(app.locals.headerData);
     })
     .catch(console.error)

// Footer Data
footerdata = {
    copyrightText: '',
    logo:''
}
client.getEntry('5DNdXk1wjYqgwsmYUiAuE')
    .then((entry) => {
       // footerdata.copyrightText = entry.fields.copyrightText;
        //footerdata.logo = entry.fields.footLogo.fields.file.url;
        console.log(entry);
    })
    .catch(console.error)


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