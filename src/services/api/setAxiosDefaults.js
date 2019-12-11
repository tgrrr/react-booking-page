import axios from 'axios';

export default function setAxiosHeaders() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}
