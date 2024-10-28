import { RefObject, memo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { Button } from 'shared/ui';

type TActivityOptionsModalProps = {
	modalRef: RefObject<BottomSheetModal>;
	onRemove: () => void;
};

export const ActivityOptionsModal = memo(({ modalRef, onRemove }: TActivityOptionsModalProps) => {
	return (
		<BottomSheetModal
			ref={modalRef}
			enableOverDrag={false}
			enablePanDownToClose
			enableDismissOnClose
		>
			<BottomSheetView style={styles.modalContainer}>
				<Button title="Remove" style={styles.button} onPress={onRemove} />
			</BottomSheetView>
		</BottomSheetModal>
	);
});

const styles = StyleSheet.create({
	modalContainer: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
	},
	button: {
		marginVertical: 20,
	},
});
