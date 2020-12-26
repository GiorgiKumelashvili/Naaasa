<template>
    <v-app>
        <!-- Main Pgae -->
        <v-main v-if="!NotMainPage && $store.state.authorized === true">
            <Navigation />
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <!-- Unauthorized access -->
        <v-main
            v-else-if="!NotMainPage && $store.state.authorized === false"
            class="grad"
        >
            <Unauthorized />
        </v-main>

        <!-- Any broken url view -->
        <v-main v-else class="grad">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import Navigation from "@/components/Fragments/Navigation";
import Unauthorized from "@/views/errors/Unauthorized";

export default {
    name: "App",

    components: {
        Navigation,
        Unauthorized,
    },

    computed: {
        NotMainPage() {
            return this.$route.name === "auth" || this.$route.name === "404";
        },
    },
};
</script>
