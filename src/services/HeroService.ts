import { AxiosError } from 'axios';
import createAxiosInstance from './api';

export type THero = {
  id?: string;
  name: string;
  description: string;
  lore: string;
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
};

class HeroService {
  static getAll = async (): Promise<{ error?: string; data?: THero[] }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.get('/hero/all');
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };
}

export { HeroService };
