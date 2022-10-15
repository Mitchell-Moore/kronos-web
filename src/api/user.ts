import axios from 'axios';
import { base_url } from '../utils/constants';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};

const setUser = (user: User) => {
  localStorage.setItem('loggedInUser', JSON.stringify(user));
};

const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

const getUser = (): User | null => {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(base_url + 'api/auth/login', data, {
      withCredentials: true,
    });
    setAccessToken(response.data.token);
    setUser(response.data.user);
    return { data: response.data, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
};
