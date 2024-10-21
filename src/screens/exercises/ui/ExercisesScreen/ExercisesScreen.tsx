import { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExerciseList } from 'widgets/selectExercise';

const ExercisesScreen = () => {
	return (
		<SafeAreaView>
			<ExerciseList />
		</SafeAreaView>
	);
};

export default memo(ExercisesScreen);
