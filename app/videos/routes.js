const controller = require('./controller')
module.exports.setup = function (router) {
  router
  .get('/', controller.getAll)
  .post('/', controller.create)
  .patch('/:id', controller.update)
  .delete('/:id', controller.destroy)
}
