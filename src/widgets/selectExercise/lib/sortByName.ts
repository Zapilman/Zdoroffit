import { TExercise } from 'entities/exercise';

export const sortExercisesByName = (exercises: TExercise[]): Record<string, TExercise[]> =>
	exercises.reduce(
		(acc, curr) => {
			acc[curr.name[0]] = [...(acc[curr.name[0]] || []), curr];
			return { ...acc };
		},
		{} as Record<string, TExercise[]>,
	);
