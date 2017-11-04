// change syntax
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
