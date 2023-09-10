import { AxiosError } from 'axios';
import createAxiosInstance from './api';
import { THero } from './HeroService';

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

export interface CreatePayload {
  name: string;
  email: string;
  password: string;
  username: string;
  hero_id: string;
}

export interface UpdateGamifiedStatsPayload {
  user_id: string;
  ambicoins_gains: number;
  xp_gains: number;
}

export type TUser = {
  id?: string | null;
  password?: string | null;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
  hero_id?: string | null;
  hero: THero;
  ambicoins: number;
  company: string;
  xp: number;
  level: number;
};

class UserService {
  static login = async (
    payload: LoginPayload
  ): Promise<{ data?: { user: TUser; token: string }; error?: string }> => {
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
  ): Promise<{ data?: TUser | null; error?: string }> => {
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
  ): Promise<{ data?: TUser | null; error?: string }> => {
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

  static create = async (
    payload: CreatePayload
  ): Promise<{ data?: { user: TUser; token: string }; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.post('/user/create', payload);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static updateGamifiedStats = async (
    payload: UpdateGamifiedStatsPayload
  ): Promise<{ data?: TUser; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.put('/user/update-gamified-stats', payload);
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
