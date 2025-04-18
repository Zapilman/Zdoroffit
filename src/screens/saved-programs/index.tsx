import { useCallback } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

import { PathRoutes } from 'core/routes';
import { router } from 'expo-router';

import { useActivity } from 'entities/activity';
import { TActivity } from 'entities/activity/model/types';

import { useProgram } from 'features/saved-program';

import { PageLayout } from 'widgets/pageLayout';

import { Typography } from 'shared/ui/components/Typography';

const parseActivities = (activities: TActivity[]) => {
	return activities.map((activity) => ({
		_id: (Math.random() + 1).toString(36).substring(7),
		exerciseName: activity.exerciseName,
		setsCount: 3,
		repsCount: 2,
		muscleGroup: 'asdasd',
		imgUrl: activity.imgUrl,
	}));
};

export const SavedProgramsScreen = () => {
	const savedPrograms = useProgram((state) => state.savedPrograms);
	const addActivity = useActivity((state) => state.addActivity);

	const handlePressProgram = useCallback(
		(programId: string) => {
			const relatedActivities = savedPrograms.find((program) => program.programId === programId)
				?.activities;

			if (relatedActivities) {
				parseActivities(relatedActivities)
					.reverse()
					.forEach((activity) => addActivity(activity));

				router.push(PathRoutes.WORKOUT);
			}
		},
		[savedPrograms, addActivity],
	);

	return (
		<PageLayout safe scrollable>
			{savedPrograms.map((program) => (
				<Pressable
					key={program.programId}
					style={styles.program}
					onPress={() => handlePressProgram(program.programId)}
				>
					<Image style={styles.programImage} source={{ uri: program.activities[0].imgUrl }} />
					<Typography size="lg" weight="bold">
						{program.programName}
					</Typography>
				</Pressable>
			))}
		</PageLayout>
	);
};

const styles = StyleSheet.create({
	program: {
		marginBottom: 30,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	programImage: {
		width: 50,
		height: 70,
		borderRadius: 5,
	},
});
