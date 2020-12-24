<template>
    <v-app>
        <template v-if="!NotMainPage && $store.state.authorized === true">
            <Navigation/>
            <Main/>
        </template>

        <v-main v-else-if="!NotMainPage && $store.state.authorized === false" class="grad">

            <v-container class="white">
                authorized: {{$store.state.authorized}}<br>
                MainPage: {{!NotMainPage}}
            </v-container>

            <Unauthorized />
        </v-main>

        <v-main v-else class="grad">

            <v-container class="white">
                authorized: {{$store.state.authorized}}<br>
                MainPage: {{!NotMainPage}}
            </v-container>

            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import Main         from './components/Main.vue'
import Navigation   from './components/Navigation';
import Unauthorized from './views/errors/Unauthorized';

export default {
    name: 'App',

    components: {
        Navigation,
        Main,
        Unauthorized
    },

    computed: {
        NotMainPage() {
            return this.$route.name === 'auth' || this.$route.name === '404';
        }
    }
};
</script>
