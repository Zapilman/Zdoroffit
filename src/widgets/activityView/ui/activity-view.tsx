import { RefObject, memo, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';

import { useActivityView } from '../lib/use-activity-view';
import { ActivityForm } from './activity-form';

type TActivityViewProps = {
	modalRef: RefObject<BottomSheetModal>;
	activityId: string | undefined;
};

const ActivityView = ({ modalRef, activityId }: TActivityViewProps) => {
	const { exercise, closeSettingsModal } = useActivityView({ modalRef, activityId });

	return (
		<BottomSheetModal
			ref={modalRef}
			// onChange={handleSheetChanges}
			enableOverDrag={false}
			// backgroundComponent={null}
			handleComponent={null}
			enablePanDownToClose
			enableDismissOnClose
		>
			<BottomSheetView style={styles.modalContainer}>
				<View style={styles.activityInterection}>
					<Typography>{exercise?.name}</Typography>

					{activityId && exercise?.id ? (
						<ActivityForm
							exerciseId={exercise?.id}
							activityId={activityId}
							onSave={closeSettingsModal}
						/>
					) : null}
				</View>
			</BottomSheetView>
		</BottomSheetModal>
	);
};

export default memo(ActivityView);

const styles = StyleSheet.create({
	modalContainer: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		backgroundColor: Colors.PRIMARY,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	activityInterection: {
		paddingHorizontal: 20,
		gap: 20,
		flex: 1,
	},
});
