import userRepository from "./user-repository";
import authRepository from "./auth-repository";

const repositories = {
    
    'users': userRepository,
    'auth': authRepository
}
export default {
    get: name => repositories[name]
};