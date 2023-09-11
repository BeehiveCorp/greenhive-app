import { AxiosError } from 'axios';

import { TUser } from './UserService';

import createAxiosInstance from './api';

export type TArticle = {
  id?: string;
  reader_id: string;
  article_id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  xp_reward: number;
  ambicoins_reward: number;
  views: number;
  author: TUser;
  created_at: string;
  updated_at: string;
  readers: string[];
};

export interface MarkAsReadPayload {
  reader_id: string;
  article_id: string;
}

class ArticleService {
  static getAll = async (): Promise<{ error?: string; data?: TArticle[] }> => {
    try {
      const api = await createAxiosInstance();
      const { data } = await api.get('/article/all');
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static find = async (id: string): Promise<{ error?: string; data?: TArticle }> => {
    try {
      const api = await createAxiosInstance();
      const { data } = await api.get(`/article/${id}`);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static view = async (id: string): Promise<void> => {
    try {
      const api = await createAxiosInstance();
      await api.get(`/article/view/${id}`);
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;
    }
  };

  static markAsRead = async (payload: MarkAsReadPayload): Promise<void> => {
    try {
      const api = await createAxiosInstance();
      await api.post('/read-article/mark-as-read', payload);
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;
    }
  };
}

export { ArticleService };
