const express = require('express');
const learnroute = express.Router();

learnroute.get('/one', (req, res) => {
    res.render("learn/connect");
});

learnroute.get('/two', function (req, res) {
    res.render("learn/introschema");
});

learnroute.get('/three', function (req, res) {
    res.render("learn/saving1");
});

learnroute.get('/four', function (req, res) {
    res.render("learn/saving2");
});

learnroute.get('/five', function (req, res) {
    res.render("learn/fetch");
});

module.exports = learnroute
