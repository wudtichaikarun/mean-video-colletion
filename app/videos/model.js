
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//import { connectDB } from '../model'

//connectDB();
const videoSchema = new Schema({
    title:{
        type: String,
        required: true,
    },   
    url: {
        type: String,
        required: true,
    },
    discription: String
});

module.exports = mongoose.model('Video', videoSchema, 'videos');

// module.exports.getVideos = function(){
    
// }