//Import the mongoose module
const mongoose = require('mongoose');
const ngooseSch = mongoose.Schema;


//Set up default mongoose connection
const mongourl = 'mongodb://127.0.0.1/tutonedb';
mongoose.connect(mongourl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

//Get the default connection
const db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));


// When successful this would be console logged 
db.once('open', function () {
    console.log("Mongodb Connection Established Successfully");
});


const Schemaone = new ngooseSch({
    fromwhoind:
    {
        type: String,
        unique: false
    },
    towhoind:
    {
        type: String,
        unique: false
    },
    indifread:
    {
        type: String,
        unique: false
    },
    messageitself:
    {
        type: String,
        unique: false
    },
    chatDate: {
        type: Date,
        default: Date.now()
    }
});


const Schemaoneconst = mongoose.model('Chatcollection', Schemaone);


const impjsonfile = require('../jsonfiles/data_two.json');




Schemaoneconst.insertMany(impjsonfile, function (err, result) {
    if (err) return console.error(err);
    console.log("Data Inserted Successfully")
    console.log(result)
});
