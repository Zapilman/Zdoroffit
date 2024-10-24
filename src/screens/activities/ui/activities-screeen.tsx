import { memo, useCallback } from 'react';

import { ActivitiesList, useActivity } from 'entities/activity';
import { AddExercise } from 'entities/exercise';

import { PageLayout } from 'widgets/pageLayout';

import { Button } from 'shared/ui';

const ActivitiesScreen = () => {
	const addActivity = useActivity((state) => state.addActivity);
	const activities = useActivity((state) => state.activities);

	const handleAdd = useCallback(() => {
		addActivity({
			exerciseName: String(Math.random()),
			muscleGroup: 'adsasdasds',
			setsCount: 3,
			repsCount: 4,
		});
	}, []);

	return (
		<PageLayout>
			<AddExercise selectedExercisesCount={activities.length} />
			<ActivitiesList />
			<Button title="asdadad" onPress={handleAdd} />
		</PageLayout>
	);
};

export default memo(ActivitiesScreen);
