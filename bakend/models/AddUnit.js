const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddUnit = new Schema({
  unitName: {
    type: String
  },
  unitPrice: {
    type: Number
  }
}, {
  collection: 'addunits'
});

module.exports = mongoose.model('AddUnit', AddUnit);