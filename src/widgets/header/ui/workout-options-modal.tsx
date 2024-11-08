import { RefObject } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { Button } from 'shared/ui';

type TWorkoutOptionsModalProps = {
	closeModal: () => void;
	modalRef: RefObject<BottomSheetModal>;
};

export const WorkoutOptionsModal = ({ modalRef, closeModal }: TWorkoutOptionsModalProps) => {
	return (
		<BottomSheetModal
			ref={modalRef}
			// onChange={handleChange}
			onDismiss={() => closeModal()}
			enablePanDownToClose
			enableDismissOnClose
		>
			<BottomSheetView style={styles.modalContainer}>
				<Button title="Save Workout" style={styles.button} />
			</BottomSheetView>
		</BottomSheetModal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
	},
	button: {
		marginVertical: 20,
	},
});
