import { memo, useCallback, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useShallow } from 'zustand/react/shallow';

import { ActivitiesList, useActivity } from 'entities/activity';
import { TActivity } from 'entities/activity/model/types';
import ActivityCard from 'entities/activity/ui/activity-card';
import { AddExercise } from 'entities/exercise';

import { ActivityView } from 'widgets/activityView';
import { PageLayout } from 'widgets/pageLayout';

import { ActivityOptionsModal } from './activity-options-modal';

const ActivitiesScreen = () => {
	const [activities, removeActivity] = useActivity(
		useShallow((state) => [state.activities, state.removeActivity]),
	);
	const [selectedActivity, setSelectedActivity] = useState<TActivity['_id']>('');

	const activityViewModalRef = useRef<BottomSheetModal>(null);
	const activityOptionModalRef = useRef<BottomSheetModal>(null);

	const handleAdd = (activityId: string) => () => {
		activityViewModalRef.current?.dismiss();
		activityViewModalRef.current?.present();
		setSelectedActivity(activityId);
	};

	const handleRemoveActivity = useCallback(() => {
		removeActivity(selectedActivity);
		activityOptionModalRef.current?.dismiss();
	}, [removeActivity, selectedActivity]);

	const handleOptionPress = (activityId: string) => () => {
		activityOptionModalRef.current?.present();
		setSelectedActivity(activityId);
	};

	const renderActivityCard = useCallback((activity: TActivity) => {
		return (
			<ActivityCard
				image={activity.imgUrl}
				title={activity.exerciseName}
				subTitle={`${activity.setsCount} Sets * ${activity.repsCount} Reps`}
				style={styles.activityCard}
				onPress={handleAdd(activity._id)}
				onOptionPress={handleOptionPress(activity._id)}
			/>
		);
	}, []);

	return (
		<PageLayout>
			<AddExercise selectedExercisesCount={activities.length} />

			<ActivitiesList renderCard={renderActivityCard} />

			<ActivityView modalRef={activityViewModalRef} activityId={selectedActivity} />

			<ActivityOptionsModal modalRef={activityOptionModalRef} onRemove={handleRemoveActivity} />
		</PageLayout>
	);
};

export default memo(ActivitiesScreen);

const styles = StyleSheet.create({
	activityCard: {
		marginTop: 30,
		zIndex: 2,
	},
});
