import { IApiInterface } from './apiInterface';
import { axiosApi } from './apiService.axios';
import { queryClientInstance } from './query-client';

class ApiService implements IApiInterface {
	private service: IApiInterface;

	constructor(service: IApiInterface) {
		this.service = service;
	}
	get<T>(url: string): Promise<T> {
		return this.service.get<T>(url);
	}
	post<T>(url: string, data: Partial<T>): Promise<T> {
		return this.service.post<T>(url, data);
	}
	put<T>(url: string, data: T): Promise<T> {
		return this.service.put<T>(url, data);
	}
	delete<T>(url: string): Promise<T> {
		return this.service.delete<T>(url);
	}
}

export const apiService = new ApiService(axiosApi);

export const queryClient = queryClientInstance;
