import axios from 'axios';

const API_KEY = 'b3c2b92a59ec4effa3129341bfffb612';
const BASE_URL = 'https://api.spoonacular.com/recipes/';
const FINAL_BASE_URL = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=pasta`;
const BACKEND_LOC = '';

export const FoodApi = axios.create({
    baseURL : FINAL_BASE_URL,
});

export const Backend = axios.create({
    baseURL: "http://localhost:80/FoodHeaven/Back/api/index.php"
});