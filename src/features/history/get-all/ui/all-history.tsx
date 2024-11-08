import { ReactNode, memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { useShallow } from 'zustand/react/shallow';

import { useExerciseHistory } from 'entities/exercise-history';

import { TABBAR_CONTENT_HEIGHT } from 'shared/config/tabbar';

import { HistoryCard } from './history-card';

type TAllHistoryProps = {
	renderExercisePreview: (exerciseId: string) => ReactNode;
};

const AllHistory = ({ renderExercisePreview }: TAllHistoryProps) => {
	const allHistory = useExerciseHistory(
		useShallow((state) => Object.values(state.history).reverse()),
	);

	return (
		<View style={styles.wrapper}>
			{allHistory.map((historyItem, index) => (
				<HistoryCard
					key={index}
					generalNote={historyItem.generalNote}
					dateCreated={historyItem.dateCreated}
					progress={historyItem.progress}
					renderExercisePreview={() => renderExercisePreview(historyItem.exerciseId)}
				/>
			))}
		</View>
	);
};

export default memo(AllHistory);

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: TABBAR_CONTENT_HEIGHT + 30,
	},
});
