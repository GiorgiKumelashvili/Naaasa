import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		darkModeDisabled: false,
		authorized: false,

		// explore section
		requestedConf: null
	},

	// Mutations only change state and are Synchronous
	mutations: {
		TOGGLE_DARK_MODE(state) {
			state.darkModeEnabled = !state.darkModeEnabled;
		},

		SET_AUTHORIZED(state, bool) {
			state.authorized = bool;
		},

		// explore section
		SET_REQUESTED_CONF(state, confObject) {
			state.requestedConf = confObject;
		}
	},

	// Actions only change state through mutations and are Asynchronous
	actions: {
		toggleDarkMode(Ctx, payload) {
			Ctx.commit("TOGGLE_DARK_MODE", payload);
		},

		setAuthorized(Ctx, payload) {
			Ctx.commit("SET_AUTHORIZED", payload);
		},

		// explore section
		setRequestedConfiguration(Ctx, payload) {
			Ctx.commit("SET_REQUESTED_CONF", payload);
		}
	},

	getters: {
		darkModeEnabled: state => state.darkModeEnabled,
		// explore section
		requestedConf: state => state.requestedConf
	},

	strict: process.env.NODE_ENV !== "production"
});
