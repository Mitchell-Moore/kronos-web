import axios from 'axios';
import { base_url } from '../utils/constanst';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(base_url + 'api/auth/login', data, {
      withCredentials: true,
    });
    console.log(response.headers.cookie);

    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
