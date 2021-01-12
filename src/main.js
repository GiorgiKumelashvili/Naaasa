import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/index'
import vuetify from '@/plugins/vuetify'
import VueCookies from 'vue-cookies'

//globals
import '@/assets/css/global.css'
import '@/libs/protos/ArrayProto'
import '@/libs/VueGlobal'

// Cookies
Vue.use(VueCookies)

// Vue Configs
Vue.config.productionTip = false
Vue.$cookies.config('30d')

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')

/*TODO

    account
    E: giorgi@exam.com
    P: giorgi321jjhi9rio12

    link for nasa img and viedo lib --> https://images.nasa.gov/

    ** Dashboard: [
        https://dribbble.com/shots/11139802-Dark-Mode-Music-Player-Web-App/attachments/2742740?mode=media
        https://vuse-dark-preview.hexesis.com/dashboard/operational (Better)
        https://vuse-dark-preview.hexesis.com/dashboard/analytical
    ]

    //! Need completion
    !) need to add avatar logo and some other stuff
    !) Forgot Password


    //* Successful ones
    +) nasa key to env
    +) Remove cookie on logout
    +) Authorization
    +) cors problem
    +) Rember me in background
    +) logout
    +) Add message for no login
    +) Axios stuff get it to .env
    +) Safe api call + Bearer access token
    +) Remove cookie on refresh expiration
    +) Create configs
    +) JWT front (refresh,access token + expiration)
    +) JWT server (access expiration)
    +) Block unauthorized
    +) Views + Router
    +) Navbar
    +) Dark mode
    +) register page
    +) 404 page gaitane calke
*/
