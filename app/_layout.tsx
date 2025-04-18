import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppProvider } from 'core/providers/AppProvider';
import { ConfigurationProvider } from 'core/providers/configuration-provider';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';

import { OpenLayout } from 'widgets/open-layout';

import { EFontFamily } from 'shared/config';
import { useAppTheme } from 'shared/lib/theme';

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
			<OpenLayout>
				<ConfigurationProvider>
					<SafeAreaProvider>
						<Slot />
					</SafeAreaProvider>
				</ConfigurationProvider>
			</OpenLayout>
		</AppProvider>
	);
}
