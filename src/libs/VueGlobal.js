import Vue from 'vue';
import Back from '@/libs/Back';
import axios from 'axios';
import Config from './Config';

let { keys } = Config;

// Backend api
Vue.prototype.$service = (methodNum, obj) => Back.Service(methodNum, obj);

// Front api
Vue.prototype.$nasa = {
    // NASA Image and Video Library
    async img_video_lib(params) {
        const BASE = 'https://images-api.nasa.gov/';

        let query = `${BASE}search?q=Earth&media_type=image,video&page=1&year_start=2020&year_end=2021`;
        let response = await axiosGet(query);

        if (response) {
            let { data: { collection } } = response
            console.log(collection);
        }
    },

    // Astronomy Picture of the Day
    async nasa_apod() {
        let query = `https://api.nasa.gov/planetary/apod?api_key=${keys.NASA_KEY}`;
        let respone = await axiosGet(query);

        return respone ? respone.data : null;
    }
}

async function axiosGet(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(`[GIO] => [\n\t${error}\n]`);
    }
}
