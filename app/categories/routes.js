// chenge syntext
const controller = require('./controller')
module.exports.setup = function (router) {
  router.get('/', controller.getAll)
}
