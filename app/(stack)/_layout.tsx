import { Pressable, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

import { Stack, useRouter } from 'expo-router';

import AccountPreview from 'features/account-preview';

import { BottomModalProvider } from 'shared/lib/bottom-modal';
import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

export default () => {
	const { theme } = useAppTheme();
	const router = useRouter();

	return (
		<BottomModalProvider>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					contentStyle: {
						backgroundColor: 'transparent',
					},
				}}
			>
				<Stack.Screen name="exercise-history/[exerciseId]" />
				<Stack.Screen
					name="profile/index"
					options={{ headerTitle: 'Profile', headerRight: () => <AccountPreview /> }}
				/>
				<Stack.Screen name="saved-programs" options={{ headerTitle: 'Saved Programs' }} />
				<Stack.Screen
					name="(top-tabs)"
					options={{
						headerTitle: () => (
							<Typography style={styles.headerTitle} size="lg" weight="bold">
								Add an exercise
							</Typography>
						),
						headerLeft: () => (
							<Pressable onPress={() => router.back()}>
								<Icon source="arrow-left" size={24} color={theme.colors.text} />
							</Pressable>
						),
					}}
				/>
			</Stack>
		</BottomModalProvider>
	);
};

const styles = StyleSheet.create({
	headerTitle: {
		paddingLeft: 20,
	},
});
