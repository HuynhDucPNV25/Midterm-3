import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_GITHUB,
});

export const get = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};