const controller = require('./controller')
// const setup = module.exports = function (router) {
//  router.get('/', controller.getAll)
// }
module.exports.setup = function (router) {
  router.get('/', controller.getAll)
}
