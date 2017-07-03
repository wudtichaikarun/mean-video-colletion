import Serializer from '../serializer'

const UserSerializer = {
    ...Serializer,

    get(user) {
       return this.serialize(user)
    },

    getAll(users){
       return users.map(user => this.serialize(user)) 
    },

    create(user){
        return this.serialize(user)
    },

    serialize(user) {
        const { id, username, email, name } = user
        return { id, username, email, name }
    }
}

export default UsersSerializer