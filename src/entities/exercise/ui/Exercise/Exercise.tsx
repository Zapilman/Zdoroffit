import { memo } from 'react';
import { View, Image } from 'react-native';
import { styles } from './Exercise.styles';
import { TExerciseToDo } from '../../../../entities/exercise';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { Typography } from 'shared/ui';
import { BulletList } from 'shared/ui/icons';

type TExerciseExtendedProps = Pick<TExerciseToDo, 'name' | 'repsCount' | 'setsCount' | 'weightKg'> &
	ViewProps;

const ExerciseExtended = ({
	name,
	repsCount,
	setsCount,
	weightKg,
	style,
	...otherProps
}: TExerciseExtendedProps) => {
	return (
		<View style={[styles.exercise, style]} {...otherProps}>
			<Image
				source={{
					uri: 'https://static.strengthlevel.com/images/exercises/seated-dumbbell-curl/seated-dumbbell-curl-800.jpg',
				}}
				style={styles.image}
			/>
			<View style={{ justifyContent: 'center', flexGrow: 1 }}>
				<Typography weight="bold">{name}</Typography>
				<Typography>
					{setsCount} Sets * {repsCount} Reps * {weightKg} kg
				</Typography>
			</View>
			<View style={{ justifyContent: 'center' }}>
				<BulletList />
			</View>
		</View>
	);
};

export default memo(ExerciseExtended);
