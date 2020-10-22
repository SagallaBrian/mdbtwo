const mongoose = require('mongoose');
const ngooseSch = mongoose.Schema;

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


module.exports = mongoose.model('Chatcollection', Schemaone);

