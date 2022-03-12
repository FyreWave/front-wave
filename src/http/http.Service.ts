import axios from "axios";
const env = process.env.NODE_ENV;

console.log("http.Service.ts", env);
// Create axios instance.
const url = `http://localhost:5100/`;

axios.defaults.baseURL = url;

// Set Guest token to headers if exis

axios.interceptors.response.use(
  (res) => {
    // Alert message if present
    if (res.data && res.data.message) {
      console.log("i go here");
      // $alert.success(res.data.message);
    }

    return res.data;
  },
  (e) => {
    // Alert message if present
    if (e.response && e.response.data && e.response.data.error) {
      // $alert.error(e.response.data.error);
    }

    return Promise.reject(e);
  }
);

// Empty function
export const e = () => {};

export { axios as $axios };
