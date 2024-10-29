import { RefObject, memo, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dimensions, StyleSheet } from 'react-native';

import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';
import { useExercises } from 'entities/exercise/model/exercises.store';

import {
	ActivityProgressForm,
	SettingsContext,
	TActivityFormEditFields,
	defaultProgressFormValues,
	useActivityProgress,
} from 'features/activities/manage-progress';

import { Colors } from 'shared/config';
import { Button, Typography } from 'shared/ui';

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

	useEffect(() => {
		if (!activity) {
			modalRef.current?.dismiss();
		}
	}, [activity]);

	const onSave = () => {
		modalRef.current?.dismiss();
	};

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
					<Typography>{exercise?.name}</Typography>

					{activityId && <ActivityForm activityId={activityId} onSave={onSave} />}
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
});
