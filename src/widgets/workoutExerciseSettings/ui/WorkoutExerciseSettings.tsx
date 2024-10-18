import { AddExercise, ExerciseList } from 'features/exercise';
import { memo } from 'react';
import { StartWorkoutButton } from './StartWorkoutButton/StartWorkoutButton';
import { ScrollView } from 'react-native';

const WorkoutExerciseSettings = () => {
	return (
		<>
			<ScrollView>
				<AddExercise />
				<ExerciseList />
			</ScrollView>
			<StartWorkoutButton />
		</>
	);
};

export default memo(WorkoutExerciseSettings);
