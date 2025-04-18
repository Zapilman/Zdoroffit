import { useEffect, useState } from 'react';

import { useModal } from 'entities/modal';
import { useSessionQuery } from 'entities/session';

import { SyncModal } from '../ui/sync-modal';
import { TApiProgressSync } from './types';

type TuseProgressSyncProps = TApiProgressSync;

export const useProgressSync = (data: TuseProgressSyncProps) => {
	const { data: sessionData } = useSessionQuery();
	const [progressData] = useState<TApiProgressSync>(data);
	const [isSynced, setIsSynced] = useState(false);
	const syncModal = useModal()(SyncModal);

	console.log('progressData', progressData);

	useEffect(() => {
		if (!isSynced && Boolean(sessionData)) {
			console.log('render');

			syncModal.showModal({ data: progressData, onSuccess: () => setIsSynced(true) });
		}
	}, [Boolean(sessionData), isSynced, progressData]);
};
