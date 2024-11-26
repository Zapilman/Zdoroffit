import { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

import { useFocusEffect, useRouter } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';
import { useExercises } from 'entities/exercise';

export const useActivityView = ({
	activityId,
	closeModal,
}: {
	activityId?: string;
	closeModal: () => void;
}) => {
	const activity = useActivity(
		useShallow((state) => state.activities.find((activity) => activity._id === activityId)),
	);
	const exercise = useExercises(
		useShallow((state) =>
			Object.values(state.exercises).find((exercise) => exercise.name === activity?.exerciseName),
		),
	);

	const handleCloseModal = useCallback(() => {
		closeModal();

		return true;
	}, [closeModal]);

	useEffect(() => {
		if (!activity) {
			closeModal();
		}
	}, [activity, closeModal]);

	useFocusEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', handleCloseModal);

		return () => backHandler.remove();
	});

	return {
		closeSettingsModal: closeModal,
		exercise,
	};
};
