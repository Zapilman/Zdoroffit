import { memo, useEffect } from 'react';
import { View } from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useExerciseHistory } from 'entities/exercise-history';
import HistoryCard from 'entities/exercise-history/ui/history-card';
import { useExercises } from 'entities/exercise/model/exercises.store';

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
		<View>
			<Typography>{exercise.name}</Typography>
			{!!exerciseHistory.length &&
				exerciseHistory.map((history) => (
					<View key={history._id}>
						<HistoryCard
							generalNote="asdadas"
							dateCreated={history.dateCreated}
							progress={history.progress}
						/>
					</View>
				))}
		</View>
	);
};

export default memo(ExerciseHistoryScreen);
