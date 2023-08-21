import userRepository from "./user-repository";

const repositories = {
    
    'users': userRepository
}
export default {
    get: name => repositories[name]
};