import Categories from './model'
const mongoose = require('mongoose');

const CategoriesController = {
    getAll(req, res){
        Categories.find()
            .exec((err, categorys) =>{ 
                if(err){
                    console.log("error !",err)
                }else{
                    res.json(categorys); 
                }
            })
    }
}
export default CategoriesController