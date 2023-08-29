import { AxiosError } from 'axios';
import createAxiosInstance from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface FindByUsernamePayload {
  username: string;
}

export interface FindByEmailPayload {
  email: string;
}

export type User = {
  id?: string | null;
  password?: string | null;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
  hero_id?: string | null;
};

class UserService {
  static login = async (
    payload: LoginPayload
  ): Promise<{ data?: { user: User; token: string }; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.post('/user/sign-in', payload);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static findByUsername = async (
    payload: FindByUsernamePayload
  ): Promise<{ data?: User | null; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.get(`/user/username/${payload.username}`);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static findByEmail = async (
    payload: FindByEmailPayload
  ): Promise<{ data?: User | null; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.get(`/user/email/${payload.email}`);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static create = async () => {};
}

export { UserService };
