const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = "mongodb://ro:1234@ds161041.mlab.com:61041/videoplayer";
const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error!!!!" + err);
    }
});


const Model = {

    findAll() {
        return this.collection()
    },

    find(id) {
        return this.collection().find(record => record.id === +id)
    },

    //------------------------->methcod from users model.js
    getUserById (id, callback){
    return this.collection().findById(id, callback);
    },

    getUserByUsername (username, callback){
    const query = {username: username}
    return this.collection().findOne(query, callback);
    },

    comparePassword (candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if(err) throw err;
            callback(null, isMatch);
        });
    },
    //------------------------->methcod from users model.js
    findIndex(id) {
        return this.collection().findIndex(record => record.id === +id)
    },

    create(attrs) {
        const collection = this.collection()
        const record = this.withPermmitedAttrs(attrs, { id: collection.length + 1 })

        this.setCollection([...collection, record])
        return record
    },

    collection() {
        return db[this.key]
    },

    setCollection(collection) {
        db[this.key] = collection
    }
}

