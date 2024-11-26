import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Tabs } from 'expo-router';

import { TABBAR_HEIGHT } from 'shared/config/tabbar';
import { BottomModalProvider } from 'shared/lib/bottom-modal';
import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

export default function RootLayout() {
	const { theme } = useAppTheme();

	return (
		<SafeAreaProvider>
			<BottomModalProvider>
				<Tabs
					screenOptions={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarStyle: {
							position: 'absolute',
							bottom: 27,
							width: 'auto',
							left: 30,
							right: 30,
							borderTopWidth: 0,
							height: TABBAR_HEIGHT,
							// height: 72,
							// elevation: 0,
							backgroundColor: theme.colors.secondary,
							// borderWidth: 2,
							// borderColor: 'black',
							borderRadius: 32,
							flexDirection: 'row',
							// alignItems: 'center',
							// justifyContent: 'center',
						},
					}}
				>
					<Tabs.Screen
						name="index"
						options={{
							tabBarIcon: ({ focused }) => (
								<View style={styles.tabBarIcon}>
									<Icon
										source="alpha-w-box"
										size={24}
										color={focused ? theme.colors.focus : theme.colors.primary}
									/>
									<Typography kind={focused ? 'focus' : 'primary'}>WorkOut</Typography>
								</View>
							),
						}}
					/>
					<Tabs.Screen
						name="activities"
						options={{
							tabBarIcon: ({ focused }) => (
								<View style={styles.tabBarIcon}>
									<Icon
										source="chart-line"
										size={24}
										color={focused ? theme.colors.focus : theme.colors.primary}
									/>
									<Typography kind={focused ? 'focus' : 'primary'}>Target</Typography>
								</View>
							),
						}}
					/>
					<Tabs.Screen
						name="log"
						options={{
							tabBarIcon: ({ focused }) => (
								<View style={styles.tabBarIcon}>
									<Icon
										source="calendar-month"
										size={24}
										color={focused ? theme.colors.focus : theme.colors.primary}
									/>
									<Typography kind={focused ? 'focus' : 'primary'}>Log</Typography>
								</View>
							),
						}}
					/>
				</Tabs>
			</BottomModalProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	tabBarIcon: {
		alignItems: 'center',
	},
});
