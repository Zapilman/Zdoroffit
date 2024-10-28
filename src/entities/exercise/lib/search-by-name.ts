import { TExercise } from '../model/types';

export const searchExercisesByName = (exercises: TExercise[], searchValue: string): TExercise[] => {
	const searchLowerCase = searchValue.trim().toLowerCase();

	return exercises.filter((exercise) => {
		const exerciseLower = exercise.name.trim().toLowerCase();
		return exerciseLower.includes(searchLowerCase);
	});
};
