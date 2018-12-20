var express = require('express');
var router = express.Router();

// const { client } = require('../app')
// const { Client } = require('pg');
// const client = app.client;
const { Client } = require('pg');




function check(req, res){
    const que = req.body.que;
    console.log(que)
    const client = new Client({
        // connectionString: process.env.DATABASE_URL,
        connectionString: 'postgres://crmpgwoagempzj:995d13a456c8659e1055b493a6baab551aa07c00338fa02d818bd928320bccb0@ec2-23-21-201-12.compute-1.amazonaws.com:5432/da9vkfi2bdthr2',
        ssl: true,
    });
    client.connect();
    client.query(`${que}`).then((result) => {
        console.log('Command Run Successfully : ' + result.rows )
        res.send(result.rows)
        client.end()
    }).catch((err) => {
        console.log(err)
        console.log(err.error)
        client.end()
        res.send('error')
    })
    
}

function getdata(req, res){
    const que = req.body.que;
    console.log(que)
    const client = new Client({
        // connectionString: process.env.DATABASE_URL,
        connectionString: 'postgres://crmpgwoagempzj:995d13a456c8659e1055b493a6baab551aa07c00338fa02d818bd928320bccb0@ec2-23-21-201-12.compute-1.amazonaws.com:5432/da9vkfi2bdthr2',
        ssl: true,
    });
    client.connect();
    client.query(`select * from user_details`).then((result) => {
        console.log('Command Run Successfully : ' + result.rows.fields )
        res.send(result.rows)
        client.end()
    }).catch((err) => {
        console.log(err)
        console.log(err.error)
        client.end()
        res.send('error')
    })
}
module.exports = {
    check,
    getdata
};