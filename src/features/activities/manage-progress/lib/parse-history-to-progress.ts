import { TExerciseHistoryItem } from 'entities/exercise-history';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';

export const parseExerciseHistoryToProgress = (
	history: TExerciseHistoryItem,
): TActivityFormEditFields[1] => ({
	[EActivityFieldNames.SET_SETTINGS]: history.progress.map((progressItem) => ({
		[EActivityFieldNames.REP_COUNT]: String(progressItem.repCount),
		[EActivityFieldNames.LIFTED_WEIGHT]: String(progressItem.weight),
	})),
});
