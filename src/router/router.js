import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/views/Auth';
import _404 from "@/views/errors/_404";

// main components
import News from '@/views/main/News'; // main no need for lazy load
const Explore = () => import(/* webpackChunkName: "Explore" */ '@/views/main/Explore');

Vue.use(VueRouter);

const routes = [
    // authenticate
    {
        path: '/auth/:authname',
        name: 'auth',
        component: Auth
    },

    // news
    {
        path: '/news',
        name: 'news',
        component: News
    },

    // explore
    {
        path: '/explore',
        name: 'explore',
        component: Explore
    },

    // error
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
