import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/views/Auth";
import _404 from "@/views/errors/_404";
import News from "@/views/main/News"; // Main component no need for lazy load

// Lazy loading
const Explore = () =>
    import(/* webpackChunkName: "Explore" */ "@/views/main/Explore");

const DetailedExplore = () =>
    import(
        /* webpackChunkName: "DetailedExplore" */ "@/views/main/DetailedExplore"
    );

Vue.use(VueRouter);

const routes = [
    // authenticate
    {
        path: "/auth/:authname",
        name: "auth",
        component: Auth
    },

    // news
    {
        path: "/news",
        name: "news",
        component: News
    },

    // explore
    {
        path: "/explore",
        name: "explore",
        component: Explore
    },
    {
        // loads as completely different component just its under explore route
        path: "/explore/:title",
        name: "detailedEploration",
        props: true,
        component: DetailedExplore
    },
    // error
    {
        path: "*",
        name: "404",
        component: _404
    }
];

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
