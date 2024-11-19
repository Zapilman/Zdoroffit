import { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { useShallow } from 'zustand/react/shallow';

import { Typography } from 'shared/ui/components/Typography';

import { useExercises } from '../model/exercises.store';
import { TExercise } from '../model/types';

type TExercisePreviewProps = {
	exerciseId: TExercise['id'];
};

export const ExercisePreview = memo(({ exerciseId }: TExercisePreviewProps) => {
	const exercise = useExercises(useShallow((state) => state.exercises[exerciseId]));

	return (
		<View>
			<Typography style={styles.title} size="lg" weight="bold">
				{exercise.name}
			</Typography>
			<Image
				source={{
					uri: exercise.imageUrl,
				}}
				style={styles.image}
			/>
		</View>
	);
});

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 70,
		borderRadius: 5,
	},
	title: {
		marginBottom: 10,
	},
});
