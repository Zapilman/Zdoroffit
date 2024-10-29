import { memo } from 'react';
import { View } from 'react-native';

import dayjs from 'dayjs';

import { Typography } from 'shared/ui';

import { TExerciseHistoryItem } from '../model/types';
import { SetInfoCard } from './set-info-card';

type TExerciseHistoryCardProps = Omit<TExerciseHistoryItem, '_id' | 'exerciseId'>;

const ExerciseHistoryCard = ({ dateCreated, generalNote, progress }: TExerciseHistoryCardProps) => {
	return (
		<View>
			<Typography kind="primary" size="lg">
				{dayjs(dateCreated).format('MMM MM, YYYY')}
			</Typography>

			<Typography kind="secondary" weight="bold">
				Working sets
			</Typography>
			{progress.map((progressItem, index) => (
				<SetInfoCard
					key={index}
					repsCount={progressItem.repCount}
					liftedWeight={progressItem.weight}
				/>
			))}

			<Typography kind="secondary" weight="bold">
				Note
			</Typography>
			<Typography>{generalNote}</Typography>
		</View>
	);
};

export default memo(ExerciseHistoryCard);
