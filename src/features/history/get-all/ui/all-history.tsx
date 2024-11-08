import { ReactNode, memo, useCallback } from 'react';
import { View } from 'react-native';

import { useShallow } from 'zustand/react/shallow';

import { useExerciseHistory } from 'entities/exercise-history';

import { Typography } from 'shared/ui';

import { HistoryCard } from './history-card';

type TAllHistoryProps = {
	renderExercisePreview: (exerciseId: string) => ReactNode;
};

const AllHistory = ({ renderExercisePreview }: TAllHistoryProps) => {
	const allHistory = useExerciseHistory(
		useShallow((state) => Object.values(state.history).reverse()),
	);

	return (
		<View>
			<Typography>AllHistsory</Typography>
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
