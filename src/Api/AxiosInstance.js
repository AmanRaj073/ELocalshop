import axios from "axios";
let token = localStorage.getItem("token");
console.log(token);
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    
}) 