<template>
    <div>
        <h1>Home</h1>
        <div class="d-flex" v-if="data">
            <div v-for="i in 3" :key="i" class="px-1">
                <BasicFood v-bind:Data="data[i]"></BasicFood>
            </div>
        </div>
        <v-btn @click="ggg">req</v-btn>

        <v-btn>
            <router-link :to="{ name: 'about', params: { id:123 }, query:{x: 'haha'}}">
                go to about /123
            </router-link>
        </v-btn>

        <!-- <v-progress-circular
            v-if="!data"
            indeterminate
            color="primary"
        ></v-progress-circular> -->
    </div>
</template>

<script>
import BasicFood    from '../components/food/BasicFood.vue'
import { FoodApi, Backend }  from '../global/axios';
import Vue          from 'vue';
import Axios        from 'axios';

export default {
    name: 'Home',
    components: {
        BasicFood,
    },

    data:()=>({
        data: null,
    }),

    methods: {
        getData: async function() {
            let req = await FoodApi.get();
            Vue.set(this, "data", req.data.results);
        },
        async ggg() {
            let req = await Backend.get();
            console.log(req);
            console.log('hi');
        }
    }
}
</script>