var express = require('express');
var router = express.Router();
const application = require('./application')
const db = require('./database')
const db1 = require('./knex')
const mongo = require('./mongo')
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");

/* GET users listing. */
router.get('/', function (req, res) {
    application.homebar(req, res)
});
router.get('/mongo', function (req, res) {
    mongo.test(req, res)
});
router.get('/demo', function (req, res) {
    application.demo(req, res)
});
router.get('/get_data', function (req, res) {
    db.getdata(req, res)
});
router.get('/check', checkauth, function (req, res) {
    application.signup(req, res)
});
router.get('/excel-demo', checkauth, function (req, res) {
    // application.excel_demo(req, res)
    res.render('demo', {layout: 'excel'})
});
router.get('/fetchdropdownitem', checkauth, function (req, res) {
    res.send({"status":"success","data":[{"dropdownid":27,"dropdownvalue":"High Touch","action":'<i class="fa fa-floppy-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i>'},{"dropdownid":29,"dropdownvalue":"Low Touch","action":'<i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i>'}],"message":"Retrieved dropdown Item"})
});
router.post('/db', function (req, res) {
    db.check(req, res)
});
router.get('/db', function (req, res) {
    res.render('db', {layout: 'table'})
});

router.get('/db', function (req, res) {
    res.render('db', {layout: 'table'})
});

router.all('/api/staff', async function(req, res) {
	let editor = new Editor(db1, 'datatables_demo').fields(
		new Field('first_name').validator(Validate.notEmpty()),
		new Field('last_name').validator(Validate.notEmpty()),
		new Field('position'),
		new Field('office'),
		new Field('extn'),
		new Field('age')
			.validator(Validate.numeric())
			.setFormatter(Format.ifEmpty(null)),
		new Field('salary')
			.validator(Validate.numeric())
			.setFormatter(Format.ifEmpty(null)),
		new Field('start_date')
			.validator(
				Validate.dateFormat(
					'YYYY-MM-DD',
					null,
					new Validate.Options({
						message: 'Please enter a date in the format yyyy-mm-dd'
					})
				)
			)
			.getFormatter(Format.sqlDateToFormat('YYYY-MM-DD'))
			.setFormatter(Format.formatToSqlDate('YYYY-MM-DD'))
	);

	await editor.process(req.body);
	res.json(editor.data());
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