import { create } from 'zustand';

import { TExerciseHistoryItem } from './types';

type TExerciseHistoryState = {
	history: Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>;

	addHistory: (item: TExerciseHistoryItem) => void;
};

export const useExerciseHistory = create<TExerciseHistoryState>()((set) => ({
	history: {},

	addHistory: (item: TExerciseHistoryItem) =>
		set((state) => ({ history: { ...state.history, [item._id]: item } })),
}));
