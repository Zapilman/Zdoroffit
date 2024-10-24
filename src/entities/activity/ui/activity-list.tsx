import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'shared/config';

import { useActivity } from '../model/activity.store';
import ActivityCard from './activity-card';

const ActivityList = () => {
	const activities = useActivity((state) => state.activities);

	return (
		<View style={styles.activities}>
			{activities.map((activity, index) => (
				<View key={activity.exerciseName} style={styles.exerciseWrapper}>
					<ActivityCard
						image="https://static.strengthlevel.com/images/exercises/seated-dumbbell-curl/seated-dumbbell-curl-800.jpg"
						title={activity.exerciseName}
						subTitle={`${activity.setsCount} Sets * ${activity.repsCount} Reps`}
						style={styles.exerciseCard}
					/>
					{index !== activities.length - 1 && <View style={styles.stepLine} />}
				</View>
			))}
		</View>
	);
};

export default memo(ActivityList);

const styles = StyleSheet.create({
	activities: {
		marginBottom: 40,
	},
	exerciseWrapper: {
		position: 'relative',
	},
	exerciseCard: {
		marginTop: 30,
		zIndex: 2,
	},
	stepLine: {
		width: 2,
		height: '100%',
		backgroundColor: Colors.PRIMARY,
		position: 'absolute',
		left: 25,
		top: '50%',
		zIndex: 1,
	},
});
