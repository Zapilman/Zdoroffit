import { memo } from 'react';

import { ExerciseList } from 'entities/exercise';

import AddExerciseToActivities from 'features/exercise/add-exercise-to-activities';

const ExercisesScreen = () => {
	return (
		<AddExerciseToActivities>
			<ExerciseList />
		</AddExerciseToActivities>
	);
};

export default memo(ExercisesScreen);
