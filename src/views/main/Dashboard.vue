<template>
    <div>
        <h1>Home</h1>
        <v-btn @click="temp">log temp</v-btn>
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
import Back from '@/libs/Back';

export default {
    name: "Home",

    data: () => ({
        arr: null
    }),

    methods: {
        temp: async function () {
            let d = await Back.Service(1);
            console.log(d);
        }
    }
};
</script>
