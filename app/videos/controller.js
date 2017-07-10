const passport = require('passport');
const jwt = require('jsonwebtoken');
// import Paginate from '../pagination';
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

import ArticlesPolicy from './policy'

const Video = require('./model');
const VideosController = {
    // GET video by id
    get(req, res){
        Video.findById(req.params.id)
            .exec(function(err, video){
                if(err){
                    console.log("error retrieving video");
                }else{
                    res.json(video);
                }
            });
    },
    // GET all videos
    getAll(req, res){
        //console.log(req.user)
         if(ArticlesPolicy.for('get', req.user)){
            const { page, categoryId } = req.query;
                if(categoryId == ""){
                    Video.paginate({}, { page: +page, limit: 10 },function(err, videos){
                        if(err){
                            console.log("err paginate")
                        }else{
                          res.json(videos); 
                        }
                    })  
                }else{
                    Video.paginate({categoryId: +categoryId }, { page: +page, limit: 10 },function(err, videos){
                        if(err){
                            console.log("err paginate")
                        }else{
                            res.json(videos); 
                        }
                    })
                }
         }else{
            res
                .status(401)
                .json({
                    video:{
                        errors:['You are not allowed to get the video.']
                    }
                }) 
         }
         
      
    },
    //POST create video
    create(req, res){
        if(ArticlesPolicy.for('create', req.user)){
            var newVideo = new Video();
            newVideo.title = req.body.title;
            newVideo.url = req.body.url;
            newVideo.discription = req.body.discription;
            newVideo.categoryId = req.body.categoryId;
            newVideo.authorId = req.user._id

            newVideo.save(function(err, done){
                if(err){
                    console.log('Error saving video');
                }else{
                    res.json(done);
                }
            });  
        }else{
            res
                .status(401)
                .json({
                    video:{
                        errors:['You are not allowed to create the video.']
                    }
                })
        }
 
    },
    //PUT update video
    update(req, res){
        Video.findByIdAndUpdate(req.params.id,{
            $set: {
                title: req.body.title,
                url: req.body.url, 
                discription: req.body.discription
            }
        },  
        {
            new: true
        },
        function(err, updateVideo){
            if(err){
                res.send("Error update video");
            }else{
                res.json(updateVideo);
            }
        });

    },
    // DELETE delete video
    destroy(req, res){
        Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
            if(err){
                res.send('Error deleting video');
            }else{
                res.json(deletedVideo);
            }
        });
    }
}

export default VideosController
