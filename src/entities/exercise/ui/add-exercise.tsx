import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { Typography } from 'shared/ui/components/Typography';
import { CrossIcon } from 'shared/ui/icons';

type TAddExerciseProps = {
	selectedExercisesCount: number;
};

const AddExercise = ({ selectedExercisesCount }: TAddExerciseProps) => {
	return (
		<View style={styles.wrapper}>
			<Typography weight="bold" size="lg">
				{selectedExercisesCount} exercises
			</Typography>
			<Link href={PathRoutes.EXERCISES}>
				<CrossIcon style={{ transform: [{ rotate: '45deg' }] }} width={30} height={30} />
			</Link>
		</View>
	);
};

export default memo(AddExercise);

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
