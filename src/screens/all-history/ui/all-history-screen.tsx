import { memo, useCallback } from 'react';

import { ExercisePreview } from 'entities/exercise';

import { AllHistory } from 'features/history/get-all';

import { Header } from 'widgets/header';

import { useBottomModal } from 'shared/lib/bottom-modal';

import { HistoryOptionsModal } from './history-options-modal';

const AllHistoryScreen = () => {
	const handleRenderPreview = useCallback((exerciseId: string) => {
		return <ExercisePreview exerciseId={exerciseId} />;
	}, []);

	const historyOptionModal = useBottomModal()(HistoryOptionsModal);

	const handleOptionBtnPress = useCallback(async () => {
		await historyOptionModal.showModal({});
	}, []);

	return (
		<>
			<Header onOptionPress={handleOptionBtnPress} />
			<AllHistory renderExercisePreview={handleRenderPreview} />
		</>
	);
};

export default memo(AllHistoryScreen);
