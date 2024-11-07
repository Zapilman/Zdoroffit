import { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { useShallow } from 'zustand/react/shallow';

import { ActivitiesList, useActivity } from 'entities/activity';
import { TActivity } from 'entities/activity/model/types';
import ActivityCard from 'entities/activity/ui/activity-card';
import { AddExercise } from 'entities/exercise';

import { ActivityView } from 'widgets/activityView';
import { useBottomModal } from 'widgets/bottom-modal';
import { PageLayout } from 'widgets/pageLayout';

import { ActivityOptionsModal } from './activity-options-modal';

const ActivitiesScreen = () => {
	const [activities, removeActivity] = useActivity(
		useShallow((state) => [state.activities, state.removeActivity]),
	);

	const optionBottomModal = useBottomModal()(ActivityOptionsModal);
	const activityViewBottomModal = useBottomModal()(ActivityView);

	const showActivityView = (activityId: string) => async () => {
		await activityViewBottomModal.showModal({ activityId });
	};

	const handleOptionPress = (activityId: string) => async () => {
		await optionBottomModal.showModal({ onRemove: () => removeActivity(activityId) });
	};

	const renderActivityCard = useCallback((activity: TActivity) => {
		return (
			<ActivityCard
				image={activity.imgUrl}
				title={activity.exerciseName}
				subTitle={`${activity.setsCount} Sets * ${activity.repsCount} Reps`}
				style={styles.activityCard}
				onPress={showActivityView(activity._id)}
				onOptionPress={handleOptionPress(activity._id)}
			/>
		);
	}, []);

	return (
		<PageLayout>
			<AddExercise selectedExercisesCount={activities.length} />

			<ActivitiesList renderCard={renderActivityCard} />
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
