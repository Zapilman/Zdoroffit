import { RefObject, memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { BottomSheetModal, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';

import { useActivityView } from '../lib/use-activity-view';
import { ActivityForm } from './activity-form';
import { ActivityVideo } from './activity-video';

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
			<BottomSheetScrollView contentContainerStyle={styles.modalContainer}>
				<View style={styles.activityInterection}>
					{exercise?.videoUrl && <ActivityVideo videoUrl={exercise.videoUrl} />}

					<View style={styles.title}>
						<Typography kind="accent" weight="bold" size="lg">
							{exercise?.name}
						</Typography>
					</View>

					{activityId && exercise?.id ? (
						<ActivityForm
							exerciseId={exercise?.id}
							activityId={activityId}
							onSave={closeSettingsModal}
						/>
					) : null}
				</View>
			</BottomSheetScrollView>
		</BottomSheetModal>
	);
};

export default memo(ActivityView);

const styles = StyleSheet.create({
	modalContainer: {
		minHeight: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		paddingHorizontal: 0,
		backgroundColor: Colors.PRIMARY,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		overflow: 'hidden',
	},
	activityInterection: {
		gap: 20,
	},
	title: {
		paddingHorizontal: 40,
	},
});
