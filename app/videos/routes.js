
const passport = require('passport');
const jwt = require('jsonwebtoken');
import controller from './controller';
const Video = require('./model');
const mongoose = require('mongoose');

export function  setup(router){
    router
        .get('/:id', controller.get)
        .get('/', passport.authenticate('jwt', {session:false}), 
            (req, res) => { 
                Video.find()
                    .exec(function(err, videos){
                        if(err){
                            console.log("error retrieving videos");
                        }else{
                            res.json(videos);          
                        }
                    });
            })
        .post('/', controller.create)
        .put('/:id', controller.update)
        .delete('/:id', controller.destroy)

}
