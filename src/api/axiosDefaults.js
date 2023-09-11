import axios from "axios";

axios.defaults.baseURL = 'https://moments-thomas-0a5a0566b8ac.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true