import axios from "axios";

const customRequst = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  // ö  baseURL: "https://eduprotrack-server.onrender.com/api/v1",
  withCredentials: true,
});

customRequst.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  // console.log(accessToken);
  if (accessToken) {
    config.headers["authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export default customRequst;
