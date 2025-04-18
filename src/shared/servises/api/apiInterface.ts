export interface IApiInterface {
	get<T>(url: string): Promise<T>;
	post<T>(url: string, data: Partial<T>): Promise<T>;
	put<T>(url: string, data: T): Promise<T>;
	delete<T>(url: string): Promise<T>;
}
