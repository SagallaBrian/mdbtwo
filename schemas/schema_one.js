const mongoose = require('mongoose');
const ngooseSch = mongoose.Schema;

const Schemaone = new ngooseSch({
    usaName:
    {
        type: String,
        unique: false
    },
    userEmail:
    {
        type: String,
        unique: true
    },
    usaDate: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('UserCollection', Schemaone);

