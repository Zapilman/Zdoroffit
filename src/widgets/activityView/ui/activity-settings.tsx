import { RefObject, memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { Typography } from 'shared/ui';

type TActivitySettingsProps = {
	modalRef: RefObject<BottomSheet>;
};

export const ActivitySettings = memo(({ modalRef }: TActivitySettingsProps) => {
	return (
		<View style={styles.settings}>
			<BottomSheet
				ref={modalRef}
				// onChange={handleSheetChanges}
				// enableOverDrag={false}
				// backgroundComponent={null}
				// handleComponent={null}
				enablePanDownToClose
			>
				<BottomSheetView style={styles.settingsContent}>
					<Typography>Notes</Typography>
					<Typography>Delete</Typography>
				</BottomSheetView>
			</BottomSheet>
		</View>
	);
});

const styles = StyleSheet.create({
	settings: {
		position: 'absolute',
		bottom: 0,
		height: 100,
		width: Dimensions.get('window').width,
	},
	settingsContent: {
		flex: 1,
	},
});
