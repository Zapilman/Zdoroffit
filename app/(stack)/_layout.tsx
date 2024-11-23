import { Pressable, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

import { Stack, useRouter } from 'expo-router';

import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

export default () => {
	const { theme } = useAppTheme();
	const router = useRouter();
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.colors.primary,
				},
				contentStyle: {
					backgroundColor: 'transparent',
				},
				// headerTintColor: '#fff',
				// animation: 'slide_from_bottom',
			}}
		>
			{/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
			{/* <Stack.Screen
				name="exercise/[exerciseId]"
				options={{
					headerShown: false,
					animation: 'slide_from_bottom',
				}}
			/> */}
			{/* <Stack.Screen name="exercises-by-muscle/[muscleName]" /> */}
			{/* <Stack.Screen name="exercise-history/[exerciseId]" /> */}
			{/* <Stack.Screen
				name="saved-programs"
				options={{
					title: 'Saved Programs',
				}}
			/> */}
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
	);
};

const styles = StyleSheet.create({
	headerTitle: {
		paddingLeft: 20,
	},
});
