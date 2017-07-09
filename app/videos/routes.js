
const passport = require('passport');
const jwt = require('jsonwebtoken');
import controller from './controller';
// import Paginate from '../pagination';
const Video = require('./model');
 const mongoose = require('mongoose');
 var mongoosePaginate = require('mongoose-paginate');


export function  setup(router){
    router
        .get('/:id', controller.get)
        .get('/', passport.authenticate('jwt', {session:false}), 
            (req, res) => { 
                // Video.find()
                //     .exec(function(err, videos){
                //         if(err){
                //             console.log("error retrieving videos");
                //         }else{
                //             res.json(videos);          
                //         }
                //     });

                const { page, perPage, categoryId } = req.query;
                 Video.paginate({}, { page, limit: 2 },function(err, videos){
                    if(err){
                        console.log("err paginate")
                    }else{
                          res.json(videos); 
                    }
                   
                })
            })
        .post('/', controller.create)
        .put('/:id', controller.update)
        .delete('/:id', controller.destroy)

}
