// store/index.js

import { createStore } from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoUuid: null,
  },
  mutations: {
    setVideoUuid(state, uuid) {
      state.videoUuid = uuid;
    },
  },
  actions: {
    // 필요한 경우 비동기 작업을 수행할 수 있습니다.
  },
});
