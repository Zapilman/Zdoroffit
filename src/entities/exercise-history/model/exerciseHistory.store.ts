import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { TExerciseHistoryItem } from './types';

type TExerciseHistoryState = {
	history: Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>;

	addHistory: (item: TExerciseHistoryItem) => void;
};

export const useExerciseHistory = create<TExerciseHistoryState>()(
	immer((set) => ({
		history: {},

		addHistory: (item: TExerciseHistoryItem) =>
			set((state) => {
				state.history[item._id] = item;
			}),
	})),
);
