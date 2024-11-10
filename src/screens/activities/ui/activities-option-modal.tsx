import { RefObject, memo, useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { PathRoutes } from 'core/routes';
import { router } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';

import { SaveProgramBtn } from 'features/saved-program';

import { Button } from 'shared/ui/Button';

type TActivitiesOptionsModalProps = {
	closeModal: () => void;
	modalRef: RefObject<BottomSheetModal>;
};

export const ActivitiesOptionsModal = memo(
	({ closeModal, modalRef }: TActivitiesOptionsModalProps) => {
		const [clearActivities, activities] = useActivity(
			useShallow((state) => [state.clearActivities, state.activities]),
		);

		const moveToSavedPrograms = useCallback(async () => {
			await new Promise((res) => setTimeout(res, 300));

			closeModal();
			router.push(PathRoutes.SAVED_PROGRAMS);
		}, [closeModal]);

		return (
			<BottomSheetModal
				ref={modalRef}
				onDismiss={closeModal}
				enablePanDownToClose
				enableDismissOnClose
			>
				<BottomSheetView style={styles.modalContainer}>
					<Button title="Clear Activities" onPress={clearActivities} />
					<SaveProgramBtn onSuccess={moveToSavedPrograms} activities={activities} />
					<Button title="Saved Programs" onPress={moveToSavedPrograms} />
				</BottomSheetView>
			</BottomSheetModal>
		);
	},
);

const styles = StyleSheet.create({
	modalContainer: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
		flexDirection: 'column',
		gap: 20,
		paddingVertical: 10,
	},
});
