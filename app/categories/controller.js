const Categories = require('./model')

module.exports.getAll = function (req, res) {
  Categories.find()
  .exec((err, categorys) => {
    if (err) {
      console.log('error !', err)
    } else {
      res.json(categorys)
    }
  })
}

/* const CategoriesController = {
  getAll (req, res) {
    Categories.find()
    .exec((err, categorys) => {
      if (err) {
        console.log('error !', err)
      } else {
        res.json(categorys)
      }
    })
  }
}
export default CategoriesController */
