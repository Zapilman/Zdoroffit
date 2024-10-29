import { memo } from 'react';
import { View } from 'react-native';

import dayjs from 'dayjs';

import { Typography } from 'shared/ui';

import { TExerciseHistoryItem } from '../model/types';

type TExerciseHistoryCardProps = Omit<TExerciseHistoryItem, '_id' | 'exerciseId'>;

const ExerciseHistoryCard = ({ dateCreated, generalNote }: TExerciseHistoryCardProps) => {
	return (
		<View>
			<Typography>ExerciseHistoryCard</Typography>
			<Typography>{dayjs(dateCreated).format('MM YYYY')}</Typography>
			<Typography>{generalNote}</Typography>
		</View>
	);
};

export default memo(ExerciseHistoryCard);
