import { memo, useEffect } from 'react';
import { PortalHost, usePortal } from '@gorhom/portal';
import { View } from 'react-native';
import { Button } from 'shared/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getButtonStyles } from './StartWorkoutButton.styles';

export const StartWorkoutButton = memo(() => {
	const portal = usePortal('pupa');

	const { bottom } = useSafeAreaInsets();
	const styles = getButtonStyles(bottom);

	useEffect(() => {
		portal.addPortal(
			'lupa',
			<View key={'lupa'} style={styles.button}>
				<Button title="Start Workout" />
			</View>,
		);
		return () => {
			portal.removePortal('lupa');
		};
	}, []);

	return <PortalHost name="pupa" />;
});
