// me-list semua endpoint yang ada di BE ke sini semua

// dibawah ini harus ada di .env
import axios, { AxiosResponse } from 'axios';
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AuthResponse = {
    access_token: string;
};

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config: any) => {
    if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    }
    return config;
});

export const login = async (email: string, password: string): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/login', { email, password });
    return data;
};

export const register = async (payload: { name: string; email: string; password: string; whatsapp?: string; schoolLevel?: string }): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/register', payload);
    return data;
};

export default api;