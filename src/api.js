import axios from "axios";

const api = axios.create({
    baseURL: "https://canal-de-emergencia-backend-production.up.railway.app",
});

export default api;