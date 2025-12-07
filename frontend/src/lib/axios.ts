import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://beat-axwc.onrender.com/api"
      : "/api",
});
