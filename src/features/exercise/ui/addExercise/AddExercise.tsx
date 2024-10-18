import { memo } from 'react';
import { View } from 'react-native';
import { CrossIcon } from 'shared/ui/icons';
import { styles } from './AddExercise.styles';
import { Typography } from 'shared/ui';

const AddExercise = () => {
	return (
		<View style={styles.wrapper}>
			<Typography weight="bold" size="lg">
				7 exercises
			</Typography>
			<CrossIcon style={{ transform: [{ rotate: '45deg' }] }} width={30} height={30} />
		</View>
	);
};

export default memo(AddExercise);
