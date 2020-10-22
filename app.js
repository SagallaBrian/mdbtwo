const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json()) ;
app.use(express.static('mpublic')) ;


// Middleware to be executed 
// app.use(function (req, res, next) {
//     console.log('This is a MiddleWere')
//     next()
// })


const mongourl = 'mongodb://127.0.0.1/tutonedb';
mongoose.connect(mongourl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);
const tutoneSchema = require('./schemas/schema_one');

app.get('/', function (req, res) {
    // res.send('This is Working');
    res.render('homepg');
});

app.get('/test', (req, res) => {
    res.send('This is Test Section ');
});

app.get('/introschema', (req, res) => {
    
    tutoneSchema.find(function (err, datafromdb) {
        if (err) return console.error(err);
        res.send(datafromdb);
    })
});

const jsintro = require('./routes/route_one');
app.use('/json',jsintro);

const learnroute = require('./routes/route_two');
app.use('/learn', learnroute);

const dbqueryroute = require('./routes/route_three');
app.use("/db", dbqueryroute);

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
