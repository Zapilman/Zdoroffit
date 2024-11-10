import { useCallback } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

import { PathRoutes } from 'core/routes';
import { router } from 'expo-router';

import { useActivity } from 'entities/activity';

import { useProgram } from 'features/saved-program';

import { PageLayout } from 'widgets/pageLayout';

import { Typography } from 'shared/ui';

export const SavedProgramsScreen = () => {
	const savedPrograms = useProgram((state) => state.savedPrograms);
	const setActivities = useActivity((state) => state.setActivities);

	const handlePressProgram = useCallback(
		(programId: string) => {
			const relatedActivities = savedPrograms.find((program) => program.programId === programId)
				?.activities;

			if (relatedActivities) {
				setActivities(relatedActivities);

				router.push(PathRoutes.WORKOUT);
			}
		},
		[savedPrograms, setActivities],
	);

	return (
		<PageLayout>
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
