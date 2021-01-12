import Vue from "vue";
import Back from "@/libs/Back";
import axios from "axios";
import Config from "./Config";

let { keys } = Config;

// Backend api
Vue.prototype.$service = (methodNum, obj) => Back.Service(methodNum, obj);

// Front api
Vue.prototype.$nasa = {
    /**
     * NASA Image and Video Library
     * @param {Object} conf
     * @returns {Object} response
     * @description:
     *      manipulate api for request to nasa
     *      image and video library
     *
     */
    async img_video_lib(conf) {
        // check if object exists
        if (!conf && typeof conf === "object")
            throw new Error("[GIO] Invalid configuration object");

        // base url for api
        const BASE = "https://images-api.nasa.gov/search";

        // destructure
        const { query, video, image, year_start, year_end } = conf;

        // manipulate parameters for api req
        let final_query = query ? query : "Earth";
        let media = `&media_type=${image ? "image" : ""}${
            video && image ? "," : ""
        }${video ? "video" : ""}`;
        let page = "&page=1";
        let year_s = `&year_start=${year_start ? year_start : "1920"}`;
        let year_e = `&year_end=${
            year_end ? year_end : new Date().getFullYear()
        }`;
        let requestText = `${BASE}?q=${final_query}${media}${page}${year_s}${year_e}`;

        console.log(requestText);
        // get response
        let response = await axiosGet(requestText);

        // return result
        return response.data.collection.items || null;
    },

    /**
     * Astronomy Picture of the Day (aka APOD)
     *
     * @param {null}
     * @returns {Object} response
     * @description:
     *      manipulate api for request to nasa
     *      image and video lib
     *
     */
    async nasa_apod() {
        let query = `https://api.nasa.gov/planetary/apod?api_key=${keys.NASA_KEY}`;
        let respone = await axiosGet(query);

        return respone ? respone.data : null;
    }
};

async function axiosGet(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(`[GIO] => [\n\t${error}\n]`);
    }
}
