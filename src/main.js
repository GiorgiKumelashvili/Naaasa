import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store/index";
import vuetify from "@/plugins/vuetify";
import VueCookies from "vue-cookies";

//globals
import "@/assets/css/global.css";
import "@/libs/protos/ArrayProto";
import "@/libs/VueGlobal";

// Cookies
Vue.use(VueCookies);

// Vue Configs
Vue.config.productionTip = false;
Vue.$cookies.config("30d");

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount("#app");
