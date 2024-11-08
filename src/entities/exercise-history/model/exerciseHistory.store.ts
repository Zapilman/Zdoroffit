import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storageService } from 'shared/servises/storage';

import { TExerciseHistoryItem } from './types';

type TExerciseHistoryState = {
	history: Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>;

	addHistory: (item: TExerciseHistoryItem) => void;
	clearHistory: () => void;
	importHistory: (history: Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>) => void;
};

export const useExerciseHistory = create<TExerciseHistoryState>()(
	persist(
		(set) => ({
			history: {},

			addHistory: (item: TExerciseHistoryItem) =>
				set((state) => ({ history: { ...state.history, [item._id]: item } })),
			clearHistory: () => {
				set(() => ({ history: {} }));
			},
			importHistory: (history: Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>) => {
				set(() => ({
					history,
				}));
			},
		}),
		{
			name: 'exercise-history-storage',
			storage: createJSONStorage(() => storageService),
		},
	),
);
