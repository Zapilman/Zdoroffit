import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLocalSearchParams } from 'expo-router';

import { Typography } from 'shared/ui';

export default () => {
	const { exerciseId } = useLocalSearchParams<{ exerciseId: string }>();

	return (
		<SafeAreaView>
			<View>
				<Typography kind="secondary">Muscle exercises {exerciseId}</Typography>
			</View>
		</SafeAreaView>
	);
};
