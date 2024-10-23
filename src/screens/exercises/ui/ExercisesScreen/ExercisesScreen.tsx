import { memo } from 'react';

import { ExerciseList } from 'widgets/selectExercise';

const ExercisesScreen = () => {
	return <ExerciseList />;
};

export default memo(ExercisesScreen);
