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

export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const getAuthHeader = (): string => {
  return getAccessToken()!!!;
};

export const getUser = (): User => {
  const user = localStorage.getItem('loggedInUser');

  if (!user) {
    throw new Error('User does not exist');
  }
  return JSON.parse(user);
};

export const isLoggedIn = (): boolean => {
  const user = getUser();
  if (user) {
    return true;
  }
  return false;
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(base_url + 'api/auth/login', data, {
      withCredentials: false,
    });
    setAccessToken(response.data.token);
    setUser(response.data.data);
    return { data: response.data, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
};

interface registerProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export const register = async (data: registerProps) => {
  try {
    const response = await axios.post(base_url + 'api/auth/register', data, {
      withCredentials: false,
    });
    return { data: response.data, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
};
