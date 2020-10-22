const express = require('express');
const jsonintro = express.Router();

const usadata = require('../jsonfiles/data_one.json')

jsonintro.get('/', (req, res) => {
    res.send({ "topic": "Introduction", "Course": "JSON" });
});

jsonintro.get('/js2', function (req, res) {
    res.json(usadata);
});

module.exports = jsonintro