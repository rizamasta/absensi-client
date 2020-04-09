import { getItem } from "./Storage";
const axios = require("axios").default;

axios.interceptors.request.use(
  function (config) {
    config.headers["x-api-key"] = process.env.REACT_APP_KEY;
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else if (config.data instanceof URLSearchParams) {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    if (getItem("token")) {
      config.headers["x-access-token"] = getItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (res) {
    return res;
  },
  function (er) {
    var code = er.response ? er.response.status : 500;
    if (code === 401) {
      return (window.location.href = "/user/login");
    }
    return Promise.reject(er.response);
  }
);

const decode = (obj) => {
  try {
    return new URLSearchParams(obj).toString();
  } catch (error) {
    return false;
  }
};

/**
 * Axios with Method GET
 * @param uri is endpoint from URL
 * @param query is parameter query for get data
 */
export async function RequestGet(uri, query) {
  if (query) {
    query = "?" + decode(query);
  }
  var url =
    uri.indexOf("https://") === 0 || uri.indexOf("http://") === 0
      ? uri
      : process.env.REACT_APP_API + uri;
  return await axios.get(url + (query || ""));
}

/**
 * Axios with method POST
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPost(uri, data) {
  var url =
    uri.indexOf("https://") === 0 || uri.indexOf("http://") === 0
      ? uri
      : process.env.REACT_APP_API + uri;
  return await axios.post(url, data);
}

/**
 * Axios with method PUT
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPut(uri, data) {
  var url =
    uri.indexOf("https://") === 0 || uri.indexOf("http://") === 0
      ? uri
      : process.env.REACT_APP_API + uri;
  return await axios.put(url, data);
}

/**
 * Axios with method DELETE
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestDelete(uri) {
  return await axios.delete(process.env.REACT_APP_API + uri);
}
