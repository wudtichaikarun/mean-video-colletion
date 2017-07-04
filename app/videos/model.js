
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//import { connectDB } from '../model'

//connectDB();
const videoSchema = new Schema({
    title: String,
    url: String,
    discription: String
});

module.exports = mongoose.model('Video', videoSchema, 'videos');