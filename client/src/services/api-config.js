import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://apartment-fix.herokuapp.com/",
  development: "http://localhost:3000",
};
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
