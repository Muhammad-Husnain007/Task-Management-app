const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, 
    required: false
  },
  image: {
    type: String, 
    required: false
  },
  price: {
    type: String || Number,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String || Number,
    required: true
  },
});

const apiModel = mongoose.model('Api', apiSchema);

module.exports = apiModel;
