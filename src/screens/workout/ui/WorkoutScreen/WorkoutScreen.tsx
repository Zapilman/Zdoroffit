import { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WorkoutExerciseSettings } from 'widgets/workoutExerciseSettings';

const WorkoutScreen = () => {
	return (
		<SafeAreaView>
			<WorkoutExerciseSettings />
		</SafeAreaView>
	);
};

export default memo(WorkoutScreen);
