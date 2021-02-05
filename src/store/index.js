import Vue from 'vue';
import Vuex from 'vuex';

//  IMPORT VUEX STORE INSTANCE FILES
import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	actions,
});
