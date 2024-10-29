import { ReactNode, memo, useCallback } from 'react';

import { Portal } from '@gorhom/portal';
import { PathRoutes } from 'core/routes';
import { router } from 'expo-router';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';
import { useExercises } from 'entities/exercise/model/exercises.store';

import { Button } from 'shared/ui';

type TAddExerciseToActivityProps = {
	children: ReactNode;
};

const AddExerciseToActivity = ({ children }: TAddExerciseToActivityProps) => {
	const [selectedExercises, exercises, clearSelected] = useExercises(
		useShallow((state) => [state.selectedExercises, state.exercises, state.clearSelected]),
	);

	const addToActivities = useActivity((state) => state.addActivity);

	const handleAddToActivities = useCallback(() => {
		selectedExercises.forEach((selectedExercise) => {
			if (exercises[selectedExercise]) {
				addToActivities({
					_id: (Math.random() + 1).toString(36).substring(7),
					exerciseName: exercises[selectedExercise].name,
					setsCount: 3,
					repsCount: 2,
					muscleGroup: 'asdasd',
				});
			}
		});
		clearSelected();
		router.push(PathRoutes.WORKOUT);
	}, [selectedExercises, addToActivities]);

	return (
		<>
			{children}
			{!!selectedExercises.length && (
				<Portal>
					<Button
						onPress={handleAddToActivities}
						style={{ position: 'absolute', bottom: 30, left: 80, right: 20 }}
						title="Add to Workout"
					/>
				</Portal>
			)}
		</>
	);
};

export default memo(AddExerciseToActivity);
