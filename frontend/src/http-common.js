import axios from "axios";
import { readEnv } from "./env";

const API_BASE_URL = (readEnv("VITE_API_BASE_URL", "REACT_APP_API_BASE_URL") || "http://localhost:8000/api/v1").replace(/\/+$/, "");

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});
