const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 50,
  },
  password:{
    type: String,
    required: true,
  },
  role:{
    type: String,
    default: 'user101',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})


const patientSchema = new mongoose.Schema({
  First_Name: {
    type: String,
    required: true,
    max: 50,
  },
  Last_Name:{
    type: String,
    required: true,
    max: 50,
  },
  Age: {
    type: Number,
    required: true,
  },
  Sex: {
    type: String,
    required: true,
    max: 10,
  },
  Weight:{
    type: Number,
    required: true,
  },
  Height:{
    type: Number,
    required: true,
  },
  Mobile:{
    type: String,
    required: true,
    max: 12,
  },
  Patient_Guardian_name:{
    type: String,
    required: true,
    max: 100,
  },
  Address:{
    type: String,
    required: true,
    max: 300,
  },
  Blood_Group:{
    type: String,
    required: true,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})



module.exports = mongoose.model('user', userSchema)
module.exports = mongoose.model('patients', patientSchema)