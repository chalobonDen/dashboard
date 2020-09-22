import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: '',
    },
  },
  mutations: {
    setPicProfile(state, value) {
      state.profile.pictureUrl = value
    },
    setUserId(state, value) {
      state.profile.userId = value
    },
    setDisplayName(state, value) {
      state.profile.displayName = value
    },
    setStatusMessage(state, value) {
      state.profile.statusMessage = value
    },
  },
  getters: {
    // getPicProfile(state) {
    //   return state.profile.pictureUrl
    // },
  },
  actions: {
    showPicProfile(context) {
      context.commit('setPicProfile', this.getters.getPicProfile)
    },
  },
  modules: {},
})
