import { RefObject, memo, useCallback, useEffect, useRef } from 'react';
import { BackHandler, Dimensions, StyleSheet, View } from 'react-native';

import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useFocusEffect } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';
import { useExercises } from 'entities/exercise/model/exercises.store';

import { SettingsContext } from 'features/activities/manage-progress';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';

import { ActivityForm } from './activity-form';
import { ActivitySettings } from './activity-settings';

type TActivityViewProps = {
	modalRef: RefObject<BottomSheetModal>;
	activityId: string | undefined;
};

const ActivityView = ({ modalRef, activityId }: TActivityViewProps) => {
	const activity = useActivity(
		useShallow((state) => state.activities.find((activity) => activity._id === activityId)),
	);
	const exercise = useExercises(
		useShallow((state) =>
			Object.values(state.exercises).find((exercise) => exercise.name === activity?.exerciseName),
		),
	);

	const settingsRef = useRef<BottomSheet>(null);

	const onSave = () => {
		modalRef.current?.dismiss();
	};

	const closeModal = useCallback(() => {
		modalRef.current?.dismiss();

		return true;
	}, []);

	useEffect(() => {
		if (!activity) {
			closeModal();
		}
	}, [activity, closeModal]);

	useFocusEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', closeModal);

		return () => backHandler.remove();
	});

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
				<SettingsContext.Provider value={{ settingsModalRef: settingsRef }}>
					<View style={styles.activityInterection}>
						<Typography>{exercise?.name}</Typography>

						{activityId && exercise?.id ? (
							<ActivityForm exerciseId={exercise?.id} activityId={activityId} onSave={onSave} />
						) : null}
					</View>
				</SettingsContext.Provider>

				<ActivitySettings modalRef={settingsRef} />
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
	},
});
