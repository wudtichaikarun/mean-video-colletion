const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  id: Number,
  title: String
})
module.exports = mongoose.model('Categories', categorySchema, 'categorys')
