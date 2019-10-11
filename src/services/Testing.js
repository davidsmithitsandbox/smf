import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://192.168.10.30/api`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  ping() {
    return apiClient.get("/test");
  }
};
