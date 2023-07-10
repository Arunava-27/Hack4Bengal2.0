const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

});

const patientSchema = new mongoose.Schema({
  fname: {
    type: String,
    max: 50,
  },
  lname: {
    type: String,
    max: 50,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
    max: 10,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  mobile: {
    type: String,
    max: 10,
  },
  pgname: {
    type: String,
    max: 100,
  },
  address: {
    type: String,
    max: 300,
  },
  bloodgroup: {
    type: String,
    max: 5,
  },
  checkbox: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})


// userSchema.pre('save', function (next) {
//     const user = this;
//     const salt = bcrypt.genSaltSync(9);
//     const encryptedPassword = bcrypt.hashSync(user.password, salt)
//     user.password = encryptedPassword;
//     next();
// })

// userSchema.methods.comparePassword = function compare(password) {
//     const user = this;
//     return bcrypt.compareSync(password, user.password)
// }

// userSchema.methods.genJWT = function generate() {
//     return jwt.sign({
//         id: this._id,
//         email: this.email
//     }, 'twitter_secret', {
//         expiresIn: '2h'
//     })

// }

const User = mongoose.model('User', userSchema);
const Patient = mongoose.model('Patient', patientSchema);

module.exports = {
  User,
  Patient
}
// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     max: 50,
//   },
//   password:{
//     type: String,
//     required: true,
//   },
//   role:{
//     type: String,
//     default: 'user101',
//   },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// })


// const patientSchema = new mongoose.Schema({
//   First_Name: {
//     type: String,
//     required: true,
//     max: 50,
//   },
//   Last_Name:{
//     type: String,
//     required: true,
//     max: 50,
//   },
//   Age: {
//     type: Number,
//     required: true,
//   },
//   Sex: {
//     type: String,
//     required: true,
//     max: 10,
//   },
//   Weight:{
//     type: Number,
//     required: true,
//   },
//   Height:{
//     type: Number,
//     required: true,
//   },
//   Mobile:{
//     type: String,
//     required: true,
//     max: 12,
//   },
//   Patient_Guardian_name:{
//     type: String,
//     required: true,
//     max: 100,
//   },
//   Address:{
//     type: String,
//     required: true,
//     max: 300,
//   },
//   Blood_Group:{
//     type: String,
//     required: true,
//     max: 5,
//   },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// })



// module.exports = mongoose.model('user', userSchema)
// module.exports = mongoose.model('patients', patientSchema)
