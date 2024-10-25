import { TExercise } from '../model/types';

export const sortExercisesByLetter = (exercises: TExercise[]): Record<string, TExercise[]> =>
	exercises.reduce(
		(acc, curr) => {
			acc[curr.name[0]] = [...(acc[curr.name[0]] || []), curr];
			return { ...acc };
		},
		{} as Record<string, TExercise[]>,
	);
