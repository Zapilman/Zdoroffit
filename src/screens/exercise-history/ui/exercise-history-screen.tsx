import { Fragment, memo, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useExerciseHistory } from 'entities/exercise-history';
import HistoryCard from 'entities/exercise-history/ui/history-card';
import { useExercises } from 'entities/exercise/model/exercises.store';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';

const ExerciseHistoryScreen = () => {
	const { exerciseId } = useLocalSearchParams<{ exerciseId: string }>();
	const navigation = useNavigation();

	const exercise = useExercises(useShallow((state) => state.exercises[exerciseId]));

	const exerciseHistory = useExerciseHistory(
		useShallow((state) =>
			Object.values(state.history).filter((history) => history.exerciseId === exerciseId),
		),
	);

	useEffect(() => {
		navigation.setOptions({ title: exercise.name });
	}, [navigation, exercise.name]);

	return (
		<View style={styles.pageWrapper}>
			{!!exerciseHistory.length &&
				exerciseHistory.map((history, index) => (
					<Fragment key={history._id}>
						{index > 0 && <View style={styles.separator} />}
						<View>
							<HistoryCard
								generalNote="asdadas"
								dateCreated={history.dateCreated}
								progress={history.progress}
							/>
						</View>
					</Fragment>
				))}
		</View>
	);
};

export default memo(ExerciseHistoryScreen);

const styles = StyleSheet.create({
	pageWrapper: {
		paddingHorizontal: 20,
		gap: 20,
	},
	separator: {
		height: 2,
		backgroundColor: Colors.PRIMARY,
		width: '80%',
	},
});
