/** @format */

import axios from "axios";

// const BASE_URL = "https://back.faridapatai.my.id";
const BASE_URL = "http://127.0.0.1:8000";
const URL_EDOM = "https://back.edom.fstuogp.com";
// const URL_EDOM = "http://127.0.0.1:8001";
const url_auth = `${BASE_URL}/auth`;
const url_api = `${BASE_URL}/api`;
const url_crud = `${BASE_URL}/crud`;
const url_storage = `${BASE_URL}/storage`;
// EDOM
const url_api_edom = `${URL_EDOM}/api`;

const auth = axios.create({
  baseURL: url_auth,
});
const crud = axios.create({
  baseURL: url_crud,
});
const api = axios.create({
  baseURL: url_api,
});
const storage = axios.create({
  baseURL: url_storage,
});

const api_edom = axios.create({
  baseURL: url_api_edom,
});

export {
  auth,
  crud,
  api,
  storage,
  BASE_URL,
  url_auth,
  url_api,
  url_crud,
  url_storage,
  url_api_edom,
  api_edom,
};
