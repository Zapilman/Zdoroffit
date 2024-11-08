import { useCallback } from 'react';
import { Pressable } from 'react-native';

import { useBottomModal } from 'widgets/bottom-modal';

import { DotsIcon } from 'shared/ui/icons';

import { WorkoutOptionsModal } from './workout-options-modal';

export const HeaderOptionButton = () => {
	const workoutOptionsModal = useBottomModal()(WorkoutOptionsModal);

	const handlePress = useCallback(async () => {
		await workoutOptionsModal.showModal({});
	}, []);

	return (
		<Pressable onPress={handlePress}>
			<DotsIcon />
		</Pressable>
	);
};
