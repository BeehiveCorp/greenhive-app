import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function createAxiosInstance() {
  const token = await AsyncStorage.getItem('@token');
  let Authorization = null;

  if (token) {
    Authorization = JSON.parse(token);
  }

  return axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization,
    },
  });
}
