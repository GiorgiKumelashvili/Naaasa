import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/index';
import vuetify from '@/plugins/vuetify';
import VueCookies from 'vue-cookies';

//globals
import '@/assets/css/global.css';
import '@/global/protos/ArrayProto';
import '@/global/protos/VueGlobal';

// Cookies
Vue.use(VueCookies);

// Vue Configs
Vue.config.productionTip = false;
Vue.$cookies.config('30d');

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');

/*
    ! account
    * giorgi@exam.com
    * giorgi321jjhi9rio12
 */

/*TODO
1) back.js shi generatetoken mzadaa
backze gasaketebelia validate yovel apize da winaagmdeg shemtxvevashi generate token da
mere rember me aris gasaketebeli tokenis shemowmebaze da mteli ambebi!!!!!

    ** Icons: https://materialdesignicons.com/cdn/2.0.46/
    ** Dashboard: [
        https://vuse-dark-preview.hexesis.com/dashboard/operational (Better)
        https://vuse-dark-preview.hexesis.com/dashboard/analytical
    ]

    //! Need completion
    !!!) Authorization
    !!!) JWT front
    !!!) JWT server

    !) Axios stuff get it to .env
    !) need to add avatar logo and some other stuff
    !) Forgot Password
    !) When form is filled on register and before pushing
       register you go to login email and password is still on


    //? Successful ones
    +) CORS policy
    +) Block unauthorized
    +) Views + Router
    +) Navbar
    +) Dark mode
    +) register page
    +) 404 page gaitane calke
*/