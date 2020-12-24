import Vue          from 'vue';
import VueRouter    from 'vue-router';
import Home         from '../views/Home.vue';
import _404         from "../views/_404.vue";
import Auth         from '../views/Auth.vue';

// Lazy Loading
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');

Vue.use(VueRouter);

const routes = [
    {
        path: '/auth/:authname',
        name: 'auth',
        component: Auth
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        children: [
            {
                path: ':id',
                component: About
            },
            {
                path: ':id/:x',
                component: About
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: _404
    }
];

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
