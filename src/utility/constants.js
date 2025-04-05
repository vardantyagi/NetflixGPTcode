const keys = import.meta.env;

export const netflixLogo = '';

export const userAvatar = '';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+keys.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500/';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English'},
  { identifier: 'hindi', name: 'Hindi'},
  { identifier: 'spanish', name: 'Spanish'},
]

export const OPENAI_KEY =keys.VITE_OPENAI_KEY;

export const GEMINI_KEY = keys.VITE_GEMINI_KEY;