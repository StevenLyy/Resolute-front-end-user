import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
    }
});

export const axiosInstanceLogin = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});