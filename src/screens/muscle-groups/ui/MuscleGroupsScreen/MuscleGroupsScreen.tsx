import { memo } from 'react';
import { View } from 'react-native';

import { MUSCLE_GROUPS, MuscleGroupCard } from 'entities/muscles';

import { styles } from './MuscleGroupsScreen.styles';

const MuscleGroupsScreen = () => {
	return (
		<View style={styles.screen}>
			{MUSCLE_GROUPS.map((muscleGroup) => (
				<MuscleGroupCard
					key={muscleGroup.name}
					muscleName={muscleGroup.name}
					imageUrl={muscleGroup.imageUrl}
				/>
			))}
		</View>
	);
};

export default memo(MuscleGroupsScreen);
