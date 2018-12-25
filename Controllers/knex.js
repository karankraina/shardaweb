let knex = require('knex');

module.exports = knex({
	client: 'pg',
	version: '10.6',
	connection: {
	  host : 'ec2-23-21-201-12.compute-1.amazonaws.com',
	  user : 'crmpgwoagempzj',
	  password : '995d13a456c8659e1055b493a6baab551aa07c00338fa02d818bd928320bccb0',
	  database : 'da9vkfi2bdthr2',
	  ssl: true
	}
});