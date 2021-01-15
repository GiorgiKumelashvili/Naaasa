import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		darkModeEnabled: false,
		authorized: false
	},

	mutations: {
		toggleDarkMode(state) {
			state.darkModeEnabled = !state.darkModeEnabled;
		},

		setAuthorized(state, bool) {
			state.authorized = bool;
		}
	},

	actions: {},

	strict: process.env.NODE_ENV !== "production"
});

// actions: {
//     // logAndSet(Context, payload) {
//     async logAndSet(Context, payload) {
//         Context.commit("log", payload);
//     }
// },
