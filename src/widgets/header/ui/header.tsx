import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Routes } from 'shared/config/routes';
import { Typography } from 'shared/ui/components/Typography';
import { DotsIcon } from 'shared/ui/icons';

import { ConnectionStatus } from './connection-status';

const Header = ({ onOptionPress }: { onOptionPress: () => void }) => {
	const router = useRouter();

	const handlePressTitle = () => {
		router.push(Routes.PROFILE);
	};

	return (
		<View style={styles.header}>
			<Pressable style={styles.connection} onPress={handlePressTitle}>
				<Typography size="lg" weight="bold">
					Zdoroffit
				</Typography>
				<ConnectionStatus />
			</Pressable>
			<Pressable onPress={onOptionPress}>
				<DotsIcon />
			</Pressable>
		</View>
	);
};

export default memo(Header);

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
	},
	connection: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
});
