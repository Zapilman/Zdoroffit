import { memo } from 'react';
import { Portal } from '@gorhom/portal';
import { View } from 'react-native';
import { Button } from 'shared/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getButtonStyles } from './StartWorkoutButton.styles';

export const StartWorkoutButton = memo(() => {
	const { bottom } = useSafeAreaInsets();
	const styles = getButtonStyles(bottom);

	return (
		<Portal>
			<View style={styles.button}>
				<Button title="Start Workout" />
			</View>
		</Portal>
	);
});
