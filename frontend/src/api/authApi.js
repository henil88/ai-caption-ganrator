import axios from "axios";

const apiUrl = axios.create({
  // baseURL: "https://ai-caption-ganrator.onrender.com/api/auth",
  baseURL:"http://localhost:3000/api/auth",
  withCredentials: true,
});

export const registerApi = (data) => apiUrl.post("/register", data);
export const loginApi = (data) => apiUrl.post("/login", data);
