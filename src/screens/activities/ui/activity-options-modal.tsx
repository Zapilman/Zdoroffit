import { RefObject, memo, useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { Button } from 'shared/ui';

type TActivityOptionsModalProps = {
	onRemove: () => void;
	closeModal: () => void;
	modalRef: RefObject<BottomSheetModal>;
};

export const ActivityOptionsModal = memo(
	({ modalRef, closeModal, onRemove }: TActivityOptionsModalProps) => {
		const handleRemove = useCallback(() => {
			onRemove();
			closeModal();
		}, [onRemove, closeModal]);

		return (
			<BottomSheetModal
				ref={modalRef}
				// onChange={handleChange}
				onDismiss={closeModal}
				enablePanDownToClose
				enableDismissOnClose
			>
				<BottomSheetView style={styles.modalContainer}>
					<Button title="Remove" style={styles.button} onPress={handleRemove} />
				</BottomSheetView>
			</BottomSheetModal>
		);
	},
);

const styles = StyleSheet.create({
	modalContainer: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
	},
	button: {
		marginVertical: 20,
	},
});
