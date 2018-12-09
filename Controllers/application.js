const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
const contentful = require('contentful');
const document = require('@contentful/rich-text-html-renderer')
var exphbs = require('express-handlebars');
var url = require('url');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));



const vaakh = function(){
    title = '';
    hindiImage = '';
    shardaImage = '';
    audio = '';
    englishTransliteration = '';
    wordMeaning = '';
    summary = '';
    additionalCommentary = '';
}



// Contentfill Client 
const client = contentful.createClient({
    space: 'hmdpqvmg445m',
    //environment: '<environment_id>', // defaults to 'master' if not set
    accessToken: 'e4cb8c0f3b9d5370ace3361bedfe93a3d72d714f681811fb3973b03b8c86baba'
})

function homebar(req, res){
    res.render('homepage1', {layout: 'homepage'});
}

function runapplication(req, res){
    const vaakharray = [];
    client.getEntry('2OwwF5tykgG0IASeo2auAi')
     .then((entry) => {
        //  console.log(entry.fields);
        entry.fields.vaakh.forEach((item) => {
            let vaakhtemp = new vaakh();
            if (item.fields.title !== undefined){
                vaakhtemp.title = item.fields.title
            }
            if (item.fields.hindiImage !== undefined){
                vaakhtemp.hindiImage = item.fields.hindiImage.fields.file.url
            }
            if (item.fields.shardaImage !== undefined){
                vaakhtemp.shardaImage = item.fields.shardaImage.fields.file.url
            }
            if (item.fields.audio !== undefined){
                vaakhtemp.audio = item.fields.audio.fields.file.url
            }
            if (item.fields.englishTransliteration !== undefined){
                vaakhtemp.englishTransliteration = document.documentToHtmlString(item.fields.englishTransliteration)
            }
            if (item.fields.wordMeaning !== undefined){
                vaakhtemp.wordMeaning = document.documentToHtmlString(item.fields.wordMeaning)
            }
            if (item.fields.summary !== undefined){
                vaakhtemp.summary = document.documentToHtmlString(item.fields.summary)
            }
            if (item.fields.additionalCommentary !== undefined){
                vaakhtemp.additionalCommentary = document.documentToHtmlString(item.fields.additionalCommentary)
            }
            vaakharray.push(vaakhtemp);
        })
        // global.vaakharrayglobal = vaakharray;
        console.log(vaakharray)
        res.render('home', {data: vaakharray[req.query.number], vaakharray});


     }).catch(console.error)
}
module.exports = {
    runapplication,
    homebar
}