import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Link } from 'expo-router';

import { Routes } from 'shared/config/routes';
import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';
import { CrossIcon } from 'shared/ui/icons';

type TAddExerciseProps = {
	selectedExercisesCount: number;
};

const AddExercise = ({ selectedExercisesCount }: TAddExerciseProps) => {
	const { theme } = useAppTheme();
	return (
		<View style={styles.wrapper}>
			<Typography weight="bold" size="lg">
				{selectedExercisesCount} exercises
			</Typography>
			<Link href={Routes.EXERCISES}>
				<CrossIcon
					style={{ transform: [{ rotate: '45deg' }] }}
					color={theme.colors.text}
					width={30}
					height={30}
				/>
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
