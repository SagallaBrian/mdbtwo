const express = require('express');
const dbgetdata = express.Router();

const userSchema = require('../schemas/schema_one');
const chatSchema = require('../schemas/schema_two');


dbgetdata.get('/colone', (req, res) => {
    userSchema.find(function (err, datafromdb) {
        if (err) return console.error(err);
        res.send(datafromdb);
    })
});

dbgetdata.get('/coltwo', (req, res) => {

    chatSchema.find(function (err, datafromdb) {
        if (err) return console.error(err);
        res.send(datafromdb);
    })
});


module.exports = dbgetdata