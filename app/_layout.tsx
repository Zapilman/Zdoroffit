import { useEffect } from 'react';
import { Icon } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PortalProvider } from '@gorhom/portal';
import { AppProvider } from 'core/providers/AppProvider';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

import { ModalProvider } from 'entities/modal';

import { Colors, EFontFamily } from 'shared/config';
import { BottomModalProvider } from 'shared/lib/bottom-modal';
import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const { theme } = useAppTheme();

	const [loaded, error] = useFonts({
		[EFontFamily.ROBOTO_BOLD]: require('../assets/fonts/RobotoBold.ttf'),
		[EFontFamily.ROBOTO_REGULAR]: require('../assets/fonts/RobotoRegular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<AppProvider>
			<PortalProvider>
				<BottomModalProvider>
					<ModalProvider>
						<SafeAreaProvider>
							<Stack
								screenOptions={{
									headerStyle: {
										backgroundColor: Colors.PRIMARY,
									},
									headerTintColor: '#fff',
									// animation: 'slide_from_bottom',
								}}
							>
								<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
								<Stack.Screen
									name="exercise/[exerciseId]"
									options={{
										headerShown: false,
										animation: 'slide_from_bottom',
									}}
								/>
								<Stack.Screen name="exercises-by-muscle/[muscleName]" />
								<Stack.Screen name="exercise-history/[exerciseId]" />
								<Stack.Screen
									name="saved-programs"
									options={{
										title: 'Saved Programs',
									}}
								/>
								<Stack.Screen
									name="exercises"
									options={{
										headerTitle: () => (
											<Typography size="lg" weight="bold">
												Add an exercise
											</Typography>
										),
										headerStyle: {
											backgroundColor: theme.colors.primary,
										},
									}}
								/>
							</Stack>
						</SafeAreaProvider>
					</ModalProvider>
				</BottomModalProvider>
			</PortalProvider>
		</AppProvider>
	);
}
