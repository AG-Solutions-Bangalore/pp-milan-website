// Centralized API configuration
const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_BASE_URL ||
  'http://ppmilan.in/crmapi/public/api/';

// Strip any trailing slashes for consistent endpoint concatenation
export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');
export const API_BASE = API_BASE_URL;

export default API_BASE_URL;
