import { memo } from 'react';
import { ScrollView } from 'react-native';

import { ExerciseList } from 'features/exercise';

import { StartWorkoutButton } from './StartWorkoutButton/StartWorkoutButton';

const WorkoutExerciseSettings = () => {
	return (
		<>
			<ScrollView>
				<ExerciseList />
			</ScrollView>
			<StartWorkoutButton />
		</>
	);
};

export default memo(WorkoutExerciseSettings);
