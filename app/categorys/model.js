const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//import { connectDB } from '../model'

//connectDB();
const categorySchema = new Schema({
    id: Number ,
    title: String
});

module.exports = mongoose.model('Categories', categorySchema, 'categorys');