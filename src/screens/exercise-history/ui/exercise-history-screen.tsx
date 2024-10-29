import { Fragment, memo, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useExercises } from 'entities/exercise';
import { ExerciseHistoryCard, useExerciseHistory } from 'entities/exercise-history';

import { Colors } from 'shared/config';

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
						<ExerciseHistoryCard
							generalNote={history.generalNote}
							dateCreated={history.dateCreated}
							progress={history.progress}
						/>
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
