import { memo, useDeferredValue, useMemo, useState } from 'react';
import { Searchbar } from 'react-native-paper';

import { ExerciseList, searchExercisesByName } from 'entities/exercise';
import { useExercises } from 'entities/exercise/model/exercises.store';

import AddExerciseToActivities from 'features/exercise/add-exercise-to-activities';

import { PageLayout } from 'widgets/pageLayout';

import { useAppTheme } from 'shared/lib/theme';

const ExercisesScreen = () => {
	const [searchValue, setSearchValue] = useState('');
	const deferredSearchValue = useDeferredValue(searchValue);

	const { theme } = useAppTheme();

	const getExercisesMap = useExercises((state) => state.getExercisesMap);

	const filteredExercises = useMemo(
		() => searchExercisesByName(getExercisesMap(), deferredSearchValue),
		[deferredSearchValue],
	);

	return (
		<>
			<Searchbar
				placeholder="Search"
				loading={searchValue !== deferredSearchValue}
				theme={{
					colors: {
						elevation: { level3: theme.colors.primary },
					},
				}}
				onChangeText={setSearchValue}
				value={searchValue}
				mode="view"
			/>
			<PageLayout>
				<ExerciseList exercisesList={filteredExercises} />

				<AddExerciseToActivities />
			</PageLayout>
		</>
	);
};

export default memo(ExercisesScreen);
