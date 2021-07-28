import { backendUrl } from './../config';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
