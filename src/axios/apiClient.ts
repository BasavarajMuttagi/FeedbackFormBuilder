import axios from "axios";

function apiClient() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return axios.create({
    baseURL: baseUrl,
  });
}

export default apiClient();
