import { memo, useCallback, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { ActivitiesList, useActivity } from 'entities/activity';
import { TActivity } from 'entities/activity/model/types';
import ActivityCard from 'entities/activity/ui/activity-card';
import { AddExercise } from 'entities/exercise';

import { ActivityView } from 'widgets/activityView';
import { PageLayout } from 'widgets/pageLayout';

const ActivitiesScreen = () => {
	const activities = useActivity((state) => state.activities);
	const [selectedActivity, setSelectedActivity] = useState<TActivity['_id']>('');

	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	const handleAdd = (activityId: string) => () => {
		bottomSheetModalRef.current?.present();
		setSelectedActivity(activityId);
	};

	const renderActivityCard = useCallback((activity: TActivity) => {
		return (
			<ActivityCard
				image="https://static.strengthlevel.com/images/exercises/seated-dumbbell-curl/seated-dumbbell-curl-800.jpg"
				title={activity.exerciseName}
				subTitle={`${activity.setsCount} Sets * ${activity.repsCount} Reps`}
				style={styles.activityCard}
				onPress={handleAdd(activity._id)}
			/>
		);
	}, []);

	return (
		<PageLayout>
			<AddExercise selectedExercisesCount={activities.length} />

			<ActivitiesList renderCard={renderActivityCard} />

			<ActivityView modalRef={bottomSheetModalRef} activityId={selectedActivity} />
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
