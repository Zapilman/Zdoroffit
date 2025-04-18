import { apiService } from 'shared/servises/api';

import { TApiProgressSync } from './types';

export class ProgressApi {
	static syncProgress(data: TApiProgressSync) {
		return apiService.post('/users/sync-progress', data);
	}
}
