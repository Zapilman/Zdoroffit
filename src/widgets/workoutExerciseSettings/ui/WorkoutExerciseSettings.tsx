import { memo } from 'react';

import { StartWorkoutButton } from './StartWorkoutButton/StartWorkoutButton';

const WorkoutExerciseSettings = () => {
	return (
		<>
			<StartWorkoutButton />
		</>
	);
};

export default memo(WorkoutExerciseSettings);
