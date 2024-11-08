import { ComponentProps, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ExerciseHistoryCard } from 'entities/exercise-history';

type THistoryCardProps = {
	renderExercisePreview: () => ReactNode;
} & ComponentProps<typeof ExerciseHistoryCard>;

export const HistoryCard = ({ renderExercisePreview, ...cardProps }: THistoryCardProps) => {
	return (
		<View style={styles.historyCard}>
			<View style={styles.preview}>{renderExercisePreview()}</View>

			<ExerciseHistoryCard {...cardProps} />
		</View>
	);
};

const styles = StyleSheet.create({
	historyCard: {
		flexDirection: 'row',
		gap: 20,
	},
	preview: {
		width: '50%',
	},
});
