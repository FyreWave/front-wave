import axios from "axios";
const env = process.env.NODE_ENV;

// Create axios instance.
const url = `http://localhost:5300/api`;

const isAuth = localStorage.getItem("cms-hit");

console.log(isAuth, "isAuth");

if (isAuth) {
  // @ts-ignore
  axios.defaults.headers["cms-hit"] = isAuth as string;

  if (env === "development") {
    const envValue = "http://_??_:5300";
    axios.defaults.baseURL = envValue.replace("_??_", window.location.hostname);
  } else if (env === "production") {
    // axios.defaults.baseURL = appBaseURL as string;
  }
}

axios.defaults.baseURL = url;

// Set Guest token to headers if exis

axios.interceptors.response.use(
  (res) => {
    // Alert message if present
    if (res.data && res.data.message) {
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
