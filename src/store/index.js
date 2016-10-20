/**
 * Created by an.han on 16/10/15.
 */

export default {
  state: {
    message: ''
  },
  mutations: {
    MESSAGE (state, value) {
      state.message = value || state.message;
    }
  }
}