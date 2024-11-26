import { RefObject, memo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { ModalProvider } from 'entities/modal';

import { ClearHistoryBtn } from 'features/history/clear';
import { ImportHistoryBtn } from 'features/history/import';
import { ShareHistoryBtn } from 'features/history/share';

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
				<ModalProvider>
					<ClearHistoryBtn />
					<ShareHistoryBtn />
					<ImportHistoryBtn />
				</ModalProvider>
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
