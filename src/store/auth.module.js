import repositoryFactory from "@/repositories/repository-factory";
const authRepository = repositoryFactory.get("auth");

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        register({ commit }, user) {
            return authRepository.register(user).then(
              response => {
                commit('registerSuccess');
                return Promise.resolve(response.data);
              },
              error => {
                commit('registerFailure');
                return Promise.reject(error);
              }
            );
          }
    },
    mutations: {
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