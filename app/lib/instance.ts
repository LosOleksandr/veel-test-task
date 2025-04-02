import axios from 'axios';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!BASE_API_URL) {
  throw new Error('BASE_API_URL is required');
}

const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
