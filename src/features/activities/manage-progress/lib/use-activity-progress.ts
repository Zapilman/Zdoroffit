import { useCallback } from 'react';

import { useShallow } from 'zustand/react/shallow';

import { useExerciseHistory } from 'entities/exercise-history';

import { TActivityFormEditFields } from '../model/formTypes';
import { parseExerciseHistoryToProgress } from './parse-history-to-progress';

export const useActivityProgress = (activityId: string) => {
	const [history, addHistory] = useExerciseHistory(
		useShallow((state) => [state.history[activityId], state.addHistory]),
	);

	const saveProgress = useCallback(
		(data: TActivityFormEditFields, exerciseId: string) => {
			addHistory({
				_id: activityId,
				exerciseId,
				dateCreated: new Date(),
				generalNote: data[activityId].general_notes?.length
					? data[activityId].general_notes[0].general_note
					: undefined,
				progress: data[activityId].set_settings.map((setting) => ({
					repCount: Number(setting.rep_count),
					weight: Number(setting.lifted_weight),
					note: setting.set_notes?.length ? setting.set_notes[0].set_note : undefined,
				})),
			});
		},
		[activityId],
	);

	return {
		progress: history ? parseExerciseHistoryToProgress(history) : null,
		saveProgress,
	};
};
