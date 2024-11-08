import { memo, useCallback } from 'react';
import { View } from 'react-native';

import { ExercisePreview } from 'entities/exercise';

import { AllHistory } from 'features/history/get-all';

import { useBottomModal } from 'widgets/bottom-modal';
import { Header } from 'widgets/header';

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
		<View>
			<Header onOptionPress={handleOptionBtnPress} />
			<AllHistory renderExercisePreview={handleRenderPreview} />
		</View>
	);
};

export default memo(AllHistoryScreen);
