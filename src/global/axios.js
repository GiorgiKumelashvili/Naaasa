import axios from 'axios';

// Base configs
const API_KEY = `${process.env.VUE_APP_FRONT_API_KEY}`;
const BASE_FRONT_URL = `${process.env.VUE_APP_FRONT_BASE_URL}`;
const BASE_BACK_URL = `${process.env.VUE_APP_BACK_BASE_URL}`;

// Export axios base urls (Can be rewritten)
export const FoodApi = axios.create({
    baseURL: `${BASE_FRONT_URL}/complexSearch?apiKey=${API_KEY}&query=pasta`,
});

export const Backend = axios.create({
    baseURL: BASE_BACK_URL
});