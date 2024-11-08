import { create } from 'zustand';

import { EXERCISES } from '../lib/exercises.mock';
import { TExercise } from './types';

type TExercisesStore = {
	exercises: Record<TExercise['id'], TExercise>;
	selectedExercises: string[];

	selectExercise: (exerciseId: string) => void;
	clearSelected: () => void;
	getExercisesMap: () => TExercise[];
};

export const useExercises = create<TExercisesStore>()((set, get) => ({
	exercises: EXERCISES,
	selectedExercises: [],

	selectExercise: (exerciseId: string) => {
		if (!get().selectedExercises.includes(exerciseId)) {
			set({ selectedExercises: [...get().selectedExercises, exerciseId] });
		} else {
			set({
				selectedExercises: get().selectedExercises.filter(
					(selectedExerciseId) => selectedExerciseId !== exerciseId,
				),
			});
		}
	},

	clearSelected: () => set({ selectedExercises: [] }),
	getExercisesMap: () => Object.values(get().exercises),
}));
