import axios from 'axios';

import { IApiInterface } from './apiInterface';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.0.101:3000',
	headers: {
		'Content-Type': 'application/json',
		'user-agent': 'ReactNative',
	},
});

class AxiosApi implements IApiInterface {
	get<T>(url: string): Promise<T> {
		return axiosInstance.get(url).then((res) => res.data);
	}
	post<T>(url: string, data: Partial<T>): Promise<T> {
		return axiosInstance.post(url, data).then((res) => res.data);
	}
	put<T>(url: string, data: T): Promise<T> {
		return axiosInstance.put(url, data).then((res) => res.data);
	}
	delete<T>(url: string): Promise<T> {
		return axiosInstance.delete(url).then((res) => res.data);
	}
}

export const axiosApi = new AxiosApi();
