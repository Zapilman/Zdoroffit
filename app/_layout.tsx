import { useEffect } from 'react';
import { Icon } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PortalProvider } from '@gorhom/portal';
import { AppProvider } from 'core/providers/AppProvider';
import { useFonts } from 'expo-font';
import { Redirect, Slot, SplashScreen, Stack } from 'expo-router';

import { ModalProvider } from 'entities/modal';

import { OpenLayout } from 'widgets/open-layout';

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
			<OpenLayout>
				<SafeAreaProvider>
					<Slot />
				</SafeAreaProvider>
			</OpenLayout>
		</AppProvider>
	);
}
