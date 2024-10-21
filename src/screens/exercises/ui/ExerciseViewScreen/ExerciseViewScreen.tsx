import { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLocalSearchParams } from 'expo-router';
import { Typography } from 'shared/ui';

const ExerciseViewScreen = () => {
	const { exerciseId } = useLocalSearchParams();

	return (
		<SafeAreaView>
			<Typography>exerciseId: {exerciseId}</Typography>
		</SafeAreaView>
	);
};

export default memo(ExerciseViewScreen);
