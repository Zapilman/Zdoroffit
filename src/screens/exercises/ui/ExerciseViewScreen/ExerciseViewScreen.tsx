import { memo } from 'react';

import { useLocalSearchParams } from 'expo-router';

import { Typography } from 'shared/ui/components/Typography';

const ExerciseViewScreen = () => {
	const { exerciseId } = useLocalSearchParams();

	return <Typography>exerciseId: {exerciseId}</Typography>;
};

export default memo(ExerciseViewScreen);
