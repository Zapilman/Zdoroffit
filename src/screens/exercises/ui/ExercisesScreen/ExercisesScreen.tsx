import { memo, useDeferredValue, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ExerciseList, searchExercisesByName } from 'entities/exercise';
import { useExercises } from 'entities/exercise/model/exercises.store';

import AddExerciseToActivities from 'features/exercise/add-exercise-to-activities';

import { Input } from 'shared/ui/components/Input';

const ExercisesScreen = () => {
	const [searchValue, setSearchValue] = useState('');
	const deferredSearchValue = useDeferredValue(searchValue);

	const getExercisesMap = useExercises((state) => state.getExercisesMap);

	const filteredExercises = useMemo(
		() => searchExercisesByName(getExercisesMap(), deferredSearchValue),
		[deferredSearchValue],
	);

	return (
		<>
			<Input
				labelText="search"
				style={styles.searchWrapper}
				inputProps={{
					onChangeText: (text: string) => setSearchValue(text),
					value: searchValue,
					style: {
						color: 'red',
					},
				}}
			/>
			<AddExerciseToActivities>
				<ExerciseList exercisesList={filteredExercises} />
			</AddExerciseToActivities>
		</>
	);
};

export default memo(ExercisesScreen);

const styles = StyleSheet.create({
	searchWrapper: {
		marginTop: 20,
	},
});
