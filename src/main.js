import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/index';
import vuetify from '@/plugins/vuetify';

//globals
import '@/assets/css/global.css';
import '@/global/protos/ArrayProto';
import '@/global/protos/VueGlobal';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');



/*TODO
    ** Icons: https://materialdesignicons.com/cdn/2.0.46/
    ** Dashboard: [
        https://vuse-dark-preview.hexesis.com/dashboard/operational (Better)
        https://vuse-dark-preview.hexesis.com/dashboard/analytical
    ]

    !!!) Authorization
    !!!) JWT here
    !!!) JWT server

    !) Axios stuff get it to .env
    !) crud
    !) need to add avatar logo and some other stuff
    !) Forgot Password
    !) When form is filled on register and before pushing
       register you go to login email and password is still on

    +) Block unauthorized
    +) Views + Router
    +) Navbar
    +) Dark mode
    +) register page
    +) 404 pge gaitane calke
*/