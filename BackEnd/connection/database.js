const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Succesfully Connected to DB");
}).catch((error)=>{
    console.log("Database connection failed "+error);
});