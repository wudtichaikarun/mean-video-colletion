import controller from './controller';
export function setup(router) {
    router
        .get('/profile',controller.getProfile)
        .get('/:id', controller.get)
        .post('/register', controller.createUser) 
        .post('/login', controller.authen) 

}
