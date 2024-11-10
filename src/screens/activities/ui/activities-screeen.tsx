import { memo, useCallback, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useFocusEffect } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { ActivitiesList, useActivity } from 'entities/activity';
import { TActivity } from 'entities/activity/model/types';
import ActivityCard from 'entities/activity/ui/activity-card';
import { AddExercise } from 'entities/exercise';

import { ActivityView } from 'widgets/activityView';
import { useBottomModal } from 'widgets/bottom-modal';
import { Header } from 'widgets/header';
import { PageLayout } from 'widgets/pageLayout';

import { ActivitiesOptionsModal } from './activities-option-modal';
import { ActivityOptionsModal } from './activity-options-modal';

const ActivitiesScreen = () => {
	const [activities, removeActivity] = useActivity(
		useShallow((state) => [state.activities, state.removeActivity]),
	);

	const optionBottomModal = useBottomModal()(ActivityOptionsModal);
	const activityViewBottomModal = useBottomModal()(ActivityView);
	const activitiesOptionsModal = useBottomModal()(ActivitiesOptionsModal);

	const showActivityView = (activityId: string) => async () => {
		await activityViewBottomModal.showModal({ activityId });
	};

	const handleOptionPress = (activityId: string) => async () => {
		await optionBottomModal.showModal({ onRemove: () => removeActivity(activityId) });
	};

	const handleActivitiesOptionsPress = useCallback(async () => {
		await activitiesOptionsModal.showModal({});
	}, []);

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
		<PageLayout style={styles.activityScreen}>
			<Header onOptionPress={handleActivitiesOptionsPress} />
			<AddExercise selectedExercisesCount={activities.length} />

			<ActivitiesList renderCard={renderActivityCard} />
		</PageLayout>
	);
};

export default memo(ActivitiesScreen);

const styles = StyleSheet.create({
	activityScreen: {
		marginBottom: 100,
	},
	activityCard: {
		marginTop: 30,
		zIndex: 2,
	},
});
