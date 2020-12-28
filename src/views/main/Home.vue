<template>
    <div>
        <h1>Home</h1>

        <v-btn>
            <router-link
                :to="{
                    name: 'about',
                    params: { id: 123 },
                    query: { x: 'haha' },
                }"
            >
                go to about /123
            </router-link>
        </v-btn>
    </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";

export default {
    name: "Home",
};
</script>