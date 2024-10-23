import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLocalSearchParams } from 'expo-router';

import { Typography } from 'shared/ui';

export default () => {
	const { muscleName } = useLocalSearchParams<{ muscleName: string }>();

	return (
		<SafeAreaView>
			<View>
				<Typography kind="secondary">Muscle exercises {muscleName}</Typography>
			</View>
		</SafeAreaView>
	);
};
