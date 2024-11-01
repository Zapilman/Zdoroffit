import { ReactNode, memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'shared/config';

import { useActivity } from '../model/activity.store';
import { TActivity } from '../model/types';

type TActivityListProps = {
	renderCard: (activity: TActivity, index: number) => ReactNode;
};

const ActivityList = ({ renderCard }: TActivityListProps) => {
	const activities = useActivity((state) => state.activities);

	return (
		<View style={styles.activities}>
			{activities.map((activity, index) => (
				<View key={activity._id} style={styles.exerciseWrapper}>
					{renderCard(activity, index)}
					{index !== activities.length - 1 && (
						<View style={[styles.stepLine, index > 1 && styles.activeStepLine]} />
					)}
				</View>
			))}
		</View>
	);
};

export default memo(ActivityList) as typeof ActivityList;

const styles = StyleSheet.create({
	activities: {
		marginBottom: 40,
	},
	exerciseWrapper: {
		position: 'relative',
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
	activeStepLine: {
		backgroundColor: Colors.SECONDARY,
	},
});
