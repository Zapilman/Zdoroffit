import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import dayjs from 'dayjs';

import { Typography } from 'shared/ui';
import ProgressList from 'shared/ui/components/progress-list';

import { TExerciseHistoryItem } from '../model/types';
import { SetInfoCard } from './set-info-card';

type TExerciseHistoryCardProps = Omit<TExerciseHistoryItem, '_id' | 'exerciseId'>;

const ExerciseHistoryCard = ({ dateCreated, generalNote, progress }: TExerciseHistoryCardProps) => {
	return (
		<View>
			<Typography kind="primary" size="lg">
				{dayjs(dateCreated).format('MMM DD, YYYY')}
			</Typography>

			<Typography kind="secondary" weight="bold" style={styles.setsTitle}>
				Working sets
			</Typography>
			<ProgressList
				list={progress}
				keyExtractor={(_, index) => String(index)}
				renderItem={(progressItem) => (
					<SetInfoCard
						repsCount={progressItem.repCount}
						liftedWeight={progressItem.weight}
						note={progressItem.note}
					/>
				)}
			/>

			{generalNote && (
				<>
					<Typography kind="secondary" weight="bold">
						Note
					</Typography>
					<Typography>{generalNote}</Typography>
				</>
			)}
		</View>
	);
};

export default memo(ExerciseHistoryCard);

const styles = StyleSheet.create({
	setsTitle: {
		marginVertical: 10,
	},
});
