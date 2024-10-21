import { Fragment, memo, useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import { Typography } from 'shared/ui';

import { EXERCISES, ExerciseCard } from 'entities/exercise';

import { sortExercisesByName } from '../../lib/sortByName';
import { styles } from './ExerciseList.styles';

const ExerciseList = () => {
	const sortedExercises = useMemo(() => sortExercisesByName(EXERCISES), []);

	return (
		<ScrollView>
			{Object.keys(sortedExercises).map((exerciseLetter) => (
				<Fragment key={exerciseLetter}>
					<Typography style={styles.titleLetter} weight="bold" kind="primary">
						{exerciseLetter}
					</Typography>
					<View>
						{sortedExercises[exerciseLetter].map((exercise) => (
							<ExerciseCard
								key={exercise.name}
								style={styles.exercise}
								image={exercise.imageUrl}
								title={exercise.name}
							/>
						))}
					</View>
				</Fragment>
			))}
		</ScrollView>
	);
};

export default memo(ExerciseList);
