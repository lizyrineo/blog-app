//connection to mongoDB
const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/blogAppDatabase'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewParser: true })
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(e => console.error('Connection error', e.message))

module.exports = mongoose.connection