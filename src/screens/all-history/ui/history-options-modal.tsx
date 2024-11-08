import { RefObject, memo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { ClearHistoryBtn } from 'features/history/clear';
import { ImportHistoryBtn } from 'features/history/import';
import { ShareHistoryBtn } from 'features/history/share';

import { Button } from 'shared/ui';

type THistoryOptionsModalProps = {
	closeModal: () => void;
	modalRef: RefObject<BottomSheetModal>;
};

export const HistoryOptionsModal = memo(({ closeModal, modalRef }: THistoryOptionsModalProps) => {
	return (
		<BottomSheetModal
			ref={modalRef}
			onDismiss={closeModal}
			enablePanDownToClose
			enableDismissOnClose
		>
			<BottomSheetView style={styles.modalContainer}>
				<ClearHistoryBtn />
				<ShareHistoryBtn />
				<ImportHistoryBtn />
			</BottomSheetView>
		</BottomSheetModal>
	);
});

const styles = StyleSheet.create({
	modalContainer: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
		flexDirection: 'column',
		gap: 20,
		paddingVertical: 10,
	},
});
