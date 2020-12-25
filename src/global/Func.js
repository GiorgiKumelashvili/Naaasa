export default class Func {
    static log() {
        console.log(process.env.VUE_APP_FRONT_API_KEY);
        console.log(process.env.VUE_APP_FRONT_BASE_URL);
        console.log(process.env.VUE_APP_BACK_BASE_URL);
    }
}