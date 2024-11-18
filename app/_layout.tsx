import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PortalProvider } from '@gorhom/portal';
import { AppProvider } from 'core/providers/AppProvider';
import { ThemeProvider } from 'core/providers/ThemeProvider';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

import { ModalProvider } from 'entities/modal';

import { BottomModalProvider } from 'widgets/bottom-modal';

import { Colors, EFontFamily } from 'shared/config';
import { Typography } from 'shared/ui';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
			<ThemeProvider>
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
											title: 'Add an exercise',
											// headerRight: () => <Typography>asdasd</Typography>,
											headerLeft: () => <Typography>back</Typography>,
										}}
									/>
								</Stack>
							</SafeAreaProvider>
						</ModalProvider>
					</BottomModalProvider>
				</PortalProvider>
			</ThemeProvider>
		</AppProvider>
	);
}
