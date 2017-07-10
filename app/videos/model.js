
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
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
    discription: String,
    categoryId: {
        type: Number,
        required: true
    }
});
videoSchema.plugin(mongoosePaginate);

const Video = module.exports = mongoose.model('Video', videoSchema, 'videos');

// module.exports.getVideos = function(){
    
// }


// module.exports.paginate = function(conditions, page = 1, perPage = 3) {
//         console.log("hello paginate")
//         const queryResults = Video.find(conditions)

//         return {
//             Video: queryResults.slice((page - 1) * perPage, page * perPage),
//             meta: {
//                 page,
//                 perPage,
//                 totalPages: Math.ceil(queryReaults.length / perPage)
//             }
//         }
//     // }
// }

// module.exports.where = function(conditions){
//     return Object
//         .keys(conditions)
//         .reduce(
//             (results, key) => results.filter(item => item[key] == conditions[key])
//         ,Video)
// }