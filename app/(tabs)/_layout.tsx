import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PortalProvider } from '@gorhom/portal';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { BottomModalProvider } from 'widgets/bottom-modal';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';
import { WorkoutIcon } from 'shared/ui/icons';

export default function RootLayout() {
	return (
		<PortalProvider>
			<BottomModalProvider>
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
									<View style={styles.tabBarIcon}>
										<WorkoutIcon />
										<Typography kind={focused ? 'primary' : 'default'}>History</Typography>
									</View>
								),
							}}
						/>
						<Tabs.Screen
							name="activities"
							options={{
								tabBarIcon: () => (
									<>
										<WorkoutIcon />
										<Text>hello</Text>
									</>
								),
								tabBarButton: ({ children, onPress }) => (
									<Pressable onPress={onPress}>
										<View style={styles.mainBtn}>{children}</View>
									</Pressable>
								),
							}}
						/>
						<Tabs.Screen
							name="status/index"
							options={{
								tabBarIcon: () => (
									<View style={styles.tabBarIcon}>
										<WorkoutIcon />
										<Text>home</Text>
									</View>
								),
							}}
						/>
					</Tabs>
				</SafeAreaProvider>
			</BottomModalProvider>
		</PortalProvider>
	);
}

const styles = StyleSheet.create({
	tabBarIcon: {
		alignItems: 'center',
		paddingTop: 10,
	},
	mainBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 80,
		width: 80,
		borderRadius: 40,
		backgroundColor: Colors.SECONDARY,
		top: -30,
	},
});
