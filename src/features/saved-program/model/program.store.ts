import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storageService } from 'shared/servises/storage';

import { TProgram } from './types';

type TProgramState = {
	savedPrograms: TProgram[];

	saveProgram: (program: TProgram) => void;
};

export const useProgram = create<TProgramState>()(
	persist(
		(set) => ({
			savedPrograms: [],

			saveProgram: (program: TProgram) =>
				set((state) => ({ savedPrograms: [...state.savedPrograms, program] })),
		}),
		{ name: 'program-storage', storage: createJSONStorage(() => storageService) },
	),
);
