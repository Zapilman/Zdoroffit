import { memo } from 'react';
import { View } from 'react-native';
import { CrossIcon } from 'shared/ui/icons';
import { styles } from './AddExercise.styles';
import { Typography } from 'shared/ui';
import { Link } from 'expo-router';
import { PathRoutes } from 'core/routes';

const AddExercise = () => {
	return (
		<View style={styles.wrapper}>
			<Typography weight="bold" size="lg">
				7 exercises
			</Typography>
			<Link href={PathRoutes.EXERCISES}>
				<CrossIcon style={{ transform: [{ rotate: '45deg' }] }} width={30} height={30} />
			</Link>
		</View>
	);
};

export default memo(AddExercise);
