// 3. change routes syntax
const controller = require('./controller')
module.exports.setup = function (router) {
  router
    .get('/profile', controller.getProfile)
    // .post('/register', controller.createUser)
    .post('/login', controller.authen)
}
