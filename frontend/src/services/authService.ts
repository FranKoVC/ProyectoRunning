import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; // URL de tu backend

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Devuelve el token y cualquier otra información
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
  }
};