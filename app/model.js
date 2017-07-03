const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = "mongodb://ro:1234@ds161041.mlab.com:61041/videoplayer";


export function connectDB () {
    mongoose.Promise = global.Promise;
    mongoose.connect(db, function(err){
    if(err){
        console.log("Error!!!!" + err);
    }
});
}
