/* import controller from './controller';
export function setup(router) {
    router
        .get('/profile',controller.getProfile)
        //.get('/:id', controller.get)
        .post('/register', controller.createUser)
        .post('/login', controller.authen) //  'api/users/login'

} */
const controller = require('./controller')
module.exports.setup = function (router) {
  router
    .get('/profile', controller.getProfile)
    .post('/register', controller.createUser)
    .post('/login', controller.authen)
}
