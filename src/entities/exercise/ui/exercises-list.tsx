import { Fragment, memo, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useShallow } from 'zustand/react/shallow';

import { Typography } from 'shared/ui';

import { sortExercisesByLetter } from '../lib/sort-by-letter';
import { useExercises } from '../model/exercises.store';
import { TExercise } from '../model/types';
import ExerciseCard from './exercise-card';

type TExerciseListProps = {
	exercisesList: TExercise[];
};

const ExerciseList = ({ exercisesList }: TExerciseListProps) => {
	const [selectedExercises, selectExercise] = useExercises(
		useShallow((state) => [state.selectedExercises, state.selectExercise]),
	);

	const sortedByLetter = useMemo(() => sortExercisesByLetter(exercisesList), [exercisesList]);

	return (
		<ScrollView>
			{Object.keys(sortedByLetter)
				.sort()
				.map((exerciseLetter) => (
					<Fragment key={exerciseLetter}>
						<Typography style={styles.titleLetter} weight="bold" kind="primary">
							{exerciseLetter}
						</Typography>
						<View>
							{sortedByLetter[exerciseLetter].map((exercise) => (
								<ExerciseCard
									key={exercise.name}
									style={styles.exercise}
									image={exercise.imageUrl}
									title={exercise.name}
									onSelect={() => selectExercise(exercise.id)}
									selected={selectedExercises.includes(exercise.id)}
								/>
							))}
						</View>
					</Fragment>
				))}
		</ScrollView>
	);
};

export default memo(ExerciseList);

const styles = StyleSheet.create({
	exercise: {
		paddingBottom: 30,
	},
	titleLetter: {
		paddingLeft: 20,
		paddingBottom: 20,
	},
});
