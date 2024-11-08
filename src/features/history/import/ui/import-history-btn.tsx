import { memo, useCallback } from 'react';

import { TExerciseHistoryItem, useExerciseHistory } from 'entities/exercise-history';
import { useModal } from 'entities/modal';

import { Button } from 'shared/ui';

import { ImportHistoryModal } from './import-modal';

const ImportHistoryBtn = () => {
	const importHistoryModal = useModal<{ history: Record<string, TExerciseHistoryItem> }>()(
		ImportHistoryModal,
	);
	const importHistory = useExerciseHistory((state) => state.importHistory);

	const handlePress = useCallback(async () => {
		const modalRes = await importHistoryModal.showModal({});
		if (modalRes?.history) {
			importHistory(modalRes.history);
		}
	}, []);

	return <Button title="Import History" onPress={handlePress} />;
};

export default memo(ImportHistoryBtn);
