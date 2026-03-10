import axios from "axios";

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1").replace(/\/+$/, "");

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});
