import { useCallback, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

import { useMutation } from '@tanstack/react-query';

import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/components/Modal';
import { Typography } from 'shared/ui/components/Typography';

import { ProgressApi } from '../model/progress.api';
import { TApiProgressSync } from '../model/types';
import { SyncingProcess } from './syncing-process';

type TSyncModalProps = {
	data: TApiProgressSync;
	onSuccess: () => void;
	closeModal: () => void;
};

export const SyncModal = ({ closeModal, data, onSuccess }: TSyncModalProps) => {
	const [isSyncing, setIsSyncing] = useState(false);
	const [syncSuccess, setSyncSuccess] = useState(false);

	const syncProgress = useMutation({
		mutationFn: ProgressApi.syncProgress,
		onSuccess: () => {
			setSyncSuccess(true);
		},
	});

	const handleSync = useCallback(() => {
		setIsSyncing(true);
		syncProgress.mutate(data);
	}, [data]);

	const handleSyncComplete = () => {
		Toast.show({
			type: 'success',
			text1: 'Sync completed!',
		});
		onSuccess();
		closeModal();
	};

	return (
		<Modal onClose={closeModal}>
			<Modal.Title>
				<Typography>Would you like to sync your progress?</Typography>
			</Modal.Title>

			{isSyncing && <SyncingProcess onComplete={handleSyncComplete} syncSuccess={syncSuccess} />}

			<Modal.Actions>
				<Button title="Sync" onPress={handleSync} />
			</Modal.Actions>
		</Modal>
	);
};
