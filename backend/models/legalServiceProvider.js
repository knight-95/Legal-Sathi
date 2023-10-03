const mongoose = require('mongoose');

const legalServiceProviderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  barCouncilId: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  languages: [{
    type: String,
    required: true, 
  }],
  specializations: [{
    type: String,
    required: true, 
  }],
  rating: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  image:{
    type: String,
    // required: true,
  },
  aadhar:{
    type: String,
    required: true,
  },
  approved:{
    type: Boolean,
    default: false,
  }
});

// Create and export the User model
module.exports = mongoose.model('LegalServiceProvider', legalServiceProviderSchema);
