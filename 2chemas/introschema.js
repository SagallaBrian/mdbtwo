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

Schemaone.methods.myfunction = function () {
    console.log(this); 
    // or console.log(this.usaName); 
}

const Schemaoneconst = mongoose.model('collectionName', Schemaone);

const newDataSch = new Schemaoneconst({ usaName: 'Brian Sagalla', userEmail: 'brayozwebdesigner@gmail.com' });
console.log(newDataSch);


const newDataSch2 = new Schemaoneconst({ usaName: 'James Wabwire', userEmail: 'jameswabwire@gmail.com' });
newDataSch2.myfunction(); 