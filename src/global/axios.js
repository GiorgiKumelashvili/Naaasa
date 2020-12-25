import axios from 'axios';

// Base configs
const API_KEY = `${process.env.VUE_APP_FRONT_API_KEY}`;
const BASE_URL = `${process.env.VUE_APP_FRONT_BASE_URL}`;

// Front Back Locations
const FINAL_BASE_URL = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=pasta`;
const BACKEND_LOC = 'http://localhost:80/FoodHeaven/Back/api/index.php';


// Export axios base urls (Can be rewritten)
export const FoodApi = axios.create({
    baseURL : FINAL_BASE_URL,
});

export const Backend = axios.create({
    baseURL: BACKEND_LOC
});