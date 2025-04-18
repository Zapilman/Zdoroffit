import { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { ActivitiesList } from 'entities/activity';
import { TActivity } from 'entities/activity/model/types';
import ActivityCard from 'entities/activity/ui/activity-card';
import { AddExercise } from 'entities/exercise';

import { Header } from 'widgets/header';
import { PageLayout } from 'widgets/pageLayout';

import { TABBAR_CONTENT_HEIGHT } from 'shared/config/tabbar';

import { useActivitiesScreen } from '../model/use-activities-screen';

const ActivitiesScreen = () => {
	const { activities, showActivityView, handleOptionPress, handleActivitiesOptionsPress } =
		useActivitiesScreen();

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
		<PageLayout scrollable safe>
			<View style={styles.activityScreen}>
				<Header onOptionPress={handleActivitiesOptionsPress} />
				<AddExercise selectedExercisesCount={activities.length} />

				<ActivitiesList renderCard={renderActivityCard} />
			</View>
		</PageLayout>
	);
};

export default memo(ActivitiesScreen);

const styles = StyleSheet.create({
	activityScreen: {
		marginBottom: TABBAR_CONTENT_HEIGHT + 30,
	},
	activityCard: {
		marginTop: 30,
		zIndex: 2,
	},
});
