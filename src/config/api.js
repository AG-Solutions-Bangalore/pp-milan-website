// Centralized API configuration
const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_BASE_URL ||
  'http://ppmilan.in/crmapi/public/api/';

// Strip any trailing slashes for consistent endpoint concatenation
export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');
export const API_BASE = API_BASE_URL;

// Centralized Image Base URL configuration
const rawImageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL ||
  import.meta.env.VITE_IMAGE_URL ||
  'http://ppmilan.in/crmapi/public/assets/images/web_images';

// Strip any trailing slashes for consistent asset concatenation
export const IMAGE_BASE_URL = rawImageBaseUrl.replace(/\/+$/, '');

/**
 * Returns the remote URL for an image hosted on the web_images asset server.
 * If fallback is provided and imageName is empty, returns fallback.
 */
export const getImageUrl = (imageName, fallback = '') => {
  if (!imageName) return fallback;
  if (/^https?:\/\//i.test(imageName)) return imageName;
  const cleanName = imageName.replace(/^\/+/, '');
  return `${IMAGE_BASE_URL}/${cleanName}`;
};

export default API_BASE_URL;
