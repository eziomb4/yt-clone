import axios from 'axios';
import { OptionsI } from '../interfaces/api';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const VITE_REACT_APP_RAPID_API_KEY = '957385d067mshb7a3fc2d0f1c370p12dd9ajsn4d9b71d87038';

const options: OptionsI = {
  url : BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
