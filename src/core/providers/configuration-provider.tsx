import { ReactNode } from 'react';

import { EXERCISES } from 'entities/exercise';
import { TExerciseHistoryItem, useExerciseHistory } from 'entities/exercise-history';

import { TApiProgressSync, useProgressSync } from 'features/progress-sync';

const parseActivities = (
	rawActivityHistory: TExerciseHistoryItem[],
): TApiProgressSync['activities'] =>
	rawActivityHistory.map((item) => {
		const activity = EXERCISES[item.exerciseId];

		return {
			exerciseSlug: activity.slug,
			progress: item.progress.map((progress) => ({
				reps: progress.repCount,
				weight: progress.weight,
				note: progress.note,
			})),
			note: item.generalNote,
		};
	});

export const ConfigurationProvider = ({ children }: { children: ReactNode }) => {
	const acitivites = useExerciseHistory((state) => state.history);

	useProgressSync({ activities: parseActivities(Object.values(acitivites)) });

	return <>{children}</>;
};
