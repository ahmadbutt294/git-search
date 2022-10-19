import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com",
});
export const setAuthHeader = (token) => {
  // client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // client.defaults.withCredentials = true;
  // client.defaults.headers.common["credentials"] = "include";
};
setAuthHeader(window.localStorage.getItem("token"));

const onSuccess = function (response) {
  console.debug("Request Successful!", response);
  return response.data;
};

const onError = function (error) {
  console.error("Request Failed:", error.config);
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
    if (error.response.data.status === 401) {
      window.localStorage.removeItem("token");
    }
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error("Error Message:", error.message);
  }

  return Promise.reject({
    errMsg: !error?.response
      ? "Network Issue!"
      : error?.response?.data?.message ||
        error?.response?.data?.errors[0].param +
          " " +
          error?.response?.data?.errors[0].msg,
    status: error?.response?.status || "not status",
  });
};

client.interceptors.response.use(onSuccess, onError);
export default client;
