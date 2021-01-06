import axios from "axios";

const API_URL = 'https://jonas-sds2.herokuapp.com';

export function fetchProduts() {
    return axios(`${API_URL}/products`);
}