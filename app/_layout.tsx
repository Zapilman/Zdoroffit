import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PortalProvider } from '@gorhom/portal';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

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

	return (
		<PortalProvider>
			<SafeAreaProvider>
				<Stack
					screenOptions={{
						headerStyle: {
							backgroundColor: Colors.PRIMARY,
						},
						headerTintColor: '#fff',
					}}
				>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="exercises"
						options={{
							title: 'Add an exercise',
							headerRight: () => <Typography>asdasd</Typography>,
							headerLeft: () => <Typography>back</Typography>,
						}}
					/>
				</Stack>
			</SafeAreaProvider>
		</PortalProvider>
	);
}
