import Vue from 'vue';
import Back from '@/libs/Back';
import Config from './Config';

//! ====== [API] ======

// Backend api
Vue.prototype.$service = (methodNum, obj) => Back.Service(methodNum, obj);



Vue.prototype.$nasa = {
    hello: function () {
        let k = Config.keys.NASA_KEY;
        return fetch('https://api.nasa.gov/planetary/apod?api_key=' + k)
            .then(blob => blob.json())
            .then(d => d)
            .catch(e => console.log(e));
    }
}
