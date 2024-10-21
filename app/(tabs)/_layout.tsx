import { Tabs, SplashScreen } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Colors, EFontFamily } from 'shared/config';
import { useEffect } from 'react';
import { PortalProvider } from '@gorhom/portal';
import { WorkoutIcon } from 'shared/ui/icons';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		[EFontFamily.ROBOTO_BOLD]: require('../../assets/fonts/RobotoBold.ttf'),
		[EFontFamily.ROBOTO_REGULAR]: require('../../assets/fonts/RobotoRegular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	return (
		<PortalProvider>
			<SafeAreaProvider>
				<StatusBar style="dark" />
				<Tabs
					screenOptions={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarStyle: {
							position: 'absolute',
							bottom: 27,
							left: 16,
							right: 16,
							height: 72,
							elevation: 0,
							backgroundColor: 'white',
							borderRadius: 16,
							alignItems: 'center',
							justifyContent: 'center',
						},
					}}
				>
					<Tabs.Screen
						name="index"
						options={{
							tabBarIcon: ({ focused }) => (
								<View style={{ alignItems: 'center', paddingTop: 10 }}>
									<WorkoutIcon />
									<Text>home</Text>
								</View>
							),
						}}
					/>
					<Tabs.Screen
						name="workout/index"
						options={{
							tabBarIcon: ({ focused }) => (
								<>
									<WorkoutIcon />
									<Text>hello</Text>
								</>
							),
							tabBarButton: ({ children, onPress }) => (
								<Pressable onPress={onPress}>
									<View
										style={{
											alignItems: 'center',
											justifyContent: 'center',
											height: 80,
											width: 80,
											borderRadius: 40,
											backgroundColor: Colors.SECONDARY,
											top: -30,
										}}
									>
										{children}
									</View>
								</Pressable>
							),
						}}
					/>
					<Tabs.Screen
						name="status/index"
						options={{
							tabBarIcon: ({ focused }) => (
								<View style={{ alignItems: 'center', paddingTop: 10 }}>
									<WorkoutIcon />
									<Text>home</Text>
								</View>
							),
						}}
					/>
					<Tabs.Screen name="workout/exercises/index" options={{ href: null }} />
					<Tabs.Screen name="workout/exercises/[exerciseId]" options={{ href: null }} />
					<Tabs.Screen name="[...unmatched]" options={{ href: null }} />
				</Tabs>
			</SafeAreaProvider>
		</PortalProvider>
	);
}
