import repositoryFactory from "@/repositories/repository-factory";
import store from '@/store';
const authRepository = repositoryFactory.get("auth");


const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

  const state = {
    user: null,
    currencies: []
};

export const auth = {
    namespaced: true,
    state: state,
    actions: {
        register({ commit }, user) {
          console.log(auth.state)
            return authRepository.register(user).then(
              response => {
                //commit('registerSuccess');
                return Promise.resolve(response.data);
              },
              error => {
                //commit('registerFailure');
                return Promise.reject(error);
              }
            );
          },
          login({ commit }, user) {
            return authRepository.login(user).then(
              user => {
                console.log(user.data)
                commit('loginSuccess', user.data);
                return Promise.resolve(user);
              },
              error => {
                commit('loginFailure');
                return Promise.reject(error);
              }
            );
          },

          testFunc({ commit }, user){

          }
    },
    mutations: {
      loginSuccess(state, user) {
        //state.status.loggedIn = true;
        state.user = user.data;
        console.log(state.user)
      },
      loginFailure(state) {
        //state.status.loggedIn = false;
        state.user = null;
      },
       /* loginSuccess(state, user) {
          state.status.loggedIn = true;
          state.user = user;
        },
        loginFailure(state) {
          state.status.loggedIn = false;
          state.user = null;
        },
        logout(state) {
          state.status.loggedIn = false;
          state.user = null;
        },*/
        registerSuccess(state) {
          state.status.loggedIn = false;
        },
        registerFailure(state) {
          state.status.loggedIn = false;
        }
      },
}

export default auth;