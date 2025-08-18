// imageApi.js
import axios from "axios";
import { createImageFormData } from "../utils/formData";

export const uploadImage = (file, lang, tone) => {
  const formData = createImageFormData(file, lang, tone);
  return axios.post("http://localhost:3000/api/post/", formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//https://ai-caption-ganrator.onrender.com
