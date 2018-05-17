import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		showSidebarLeft: false,
		showSidebarRight: true,
		theme: true
	},

	getters: {
		sbLeft(state) {
			return state.showSidebarLeft
		},

		sbRight(state) {
			return state.showSidebarRight
		},

		getTheme(state) {
			return state.theme
		}
	},

	mutations: {
		setSbLeft(state) {
			state.showSidebarLeft = !state.showSidebarLeft;
		},

		setSbRight(state) {
			state.showSidebarRight = !state.showSidebarRight;
		},

		setTheme(state) {
			state.theme = !state.theme;
		}
	}
})