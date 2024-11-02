import { RefObject, useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useFocusEffect } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';
import { useExercises } from 'entities/exercise';

export const useActivityView = ({
	activityId,
	modalRef,
}: {
	activityId?: string;
	modalRef: RefObject<BottomSheetModal>;
}) => {
	const activity = useActivity(
		useShallow((state) => state.activities.find((activity) => activity._id === activityId)),
	);
	const exercise = useExercises(
		useShallow((state) =>
			Object.values(state.exercises).find((exercise) => exercise.name === activity?.exerciseName),
		),
	);

	const closeModal = useCallback(() => {
		modalRef.current?.dismiss();

		return true;
	}, []);

	useEffect(() => {
		if (!activity) {
			closeModal();
		}
	}, [activity, closeModal]);

	useFocusEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', closeModal);

		return () => backHandler.remove();
	});

	return {
		closeSettingsModal: closeModal,
		exercise,
	};
};
