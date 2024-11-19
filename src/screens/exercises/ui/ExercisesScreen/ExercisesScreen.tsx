import { memo, useDeferredValue, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { ExerciseList, searchExercisesByName } from 'entities/exercise';
import { useExercises } from 'entities/exercise/model/exercises.store';

import AddExerciseToActivities from 'features/exercise/add-exercise-to-activities';

import { Colors } from 'shared/config';

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
			<Searchbar
				placeholder="Search"
				style={styles.searchWrapper}
				theme={{ colors: { elevation: { level3: Colors.SECONDARY } } }}
				onChangeText={setSearchValue}
				value={searchValue}
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
