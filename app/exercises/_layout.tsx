import {
	MaterialTopTabNavigationEventMap,
	MaterialTopTabNavigationOptions,
	createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import { OpenLayout } from 'widgets/open-layout';

import { Colors } from 'shared/config';
import { useAppTheme } from 'shared/lib/theme';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
	MaterialTopTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	MaterialTopTabNavigationEventMap
>(Navigator);

export default () => {
	const { theme } = useAppTheme();
	return (
		<OpenLayout>
			<MaterialTopTabs
				screenOptions={{
					tabBarActiveTintColor: theme.colors.focus,
					tabBarInactiveTintColor: theme.colors.text,
					tabBarLabelStyle: {
						fontSize: 14,
						fontWeight: 'bold',
						textTransform: 'capitalize',
					},
					tabBarIndicatorStyle: { backgroundColor: theme.colors.primary, height: 2 },
					tabBarContentContainerStyle: { backgroundColor: 'transparent' },
				}}
			>
				<MaterialTopTabs.Screen name="index" options={{ title: 'All' }} />
				<MaterialTopTabs.Screen name="by-muscles" options={{ title: 'By Muscle' }} />
				<MaterialTopTabs.Screen name="categories" options={{ title: 'By Categories' }} />
			</MaterialTopTabs>
		</OpenLayout>
	);
};
