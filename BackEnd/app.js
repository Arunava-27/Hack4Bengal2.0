const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const rateLimit = require("express-rate-limit");
const fs = require('fs');
require('./connection/database')


const routes = require('./routes/route')

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 200, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later"
});

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(limiter);


app.get('/', (req, res) => {
  res.send('API is running..')
})

app.use('/api/v1', routes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} on port ${PORT}`)
)