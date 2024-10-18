import { memo } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './ExercisesList.styles';
import { TExerciseToDo } from 'entities/exercise';
import { Exercise } from 'entities/exercise/ui';

const list: TExerciseToDo[] = [
	{
		name: 'Burbell Curl',
		weightKg: 16,
		setsCount: 3,
		repsCount: 10,
	},
	{
		name: 'Close-Grip Bench Press',
		weightKg: 35,
		setsCount: 3,
		repsCount: 10,
	},
	{
		name: 'Deadlift',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
	{
		name: 'Deadlift2',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
	{
		name: 'Deadlift3',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
	{
		name: 'Deadlift4',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
	{
		name: 'Deadlift5',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
	{
		name: 'Deadlift6',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
	{
		name: 'Deadlift7',
		weightKg: 45,
		setsCount: 4,
		repsCount: 14,
	},
];

const ExercisesList = () => {
	return (
		<View>
			{list.map((exercise, index) => (
				<View style={styles.exerciseWrapper} key={exercise.name}>
					<Exercise
						name={exercise.name}
						repsCount={exercise.repsCount}
						setsCount={exercise.setsCount}
						weightKg={exercise.weightKg}
						style={styles.exerciseCard}
					/>
					{index !== list.length - 1 && <View style={styles.stepLine} />}
				</View>
			))}
		</View>
	);
};

export default memo(ExercisesList);
