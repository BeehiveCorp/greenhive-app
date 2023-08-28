import { AxiosError } from 'axios';
import createAxiosInstance from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export type User = {
  id?: string | null;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
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
}

export { UserService };
