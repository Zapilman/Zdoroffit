import { apiService } from 'shared/servises/api';

import { TSession } from './types';

export class SessionApi {
	static getSession(): Promise<TSession> {
		return apiService.get<TSession>('/auth/session');
	}

	static signOut() {
		return apiService.post('/auth/signOut', {});
	}

	static signIn(data: { email: string; password: string }) {
		return apiService.post('/auth/signIn', data);
	}
}
