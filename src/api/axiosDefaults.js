import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-thomas-48cbbb8b8839.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true