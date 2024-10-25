import { ReactNode, memo, useCallback } from 'react';
import { View } from 'react-native';

import { Portal } from '@gorhom/portal';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';
import { useExercises } from 'entities/exercise/model/exercises.store';

import { Button, Typography } from 'shared/ui';

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
					_id: String(Math.random()),
					exerciseName: exercises[selectedExercise].name,
					setsCount: 3,
					repsCount: 2,
					muscleGroup: 'asdasd',
				});
			}
			// addToActivities({
			//     exerciseName: selectedExercise.nam
			// });
		});
		clearSelected();
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
