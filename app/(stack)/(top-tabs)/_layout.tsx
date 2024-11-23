import {
	MaterialTopTabNavigationEventMap,
	MaterialTopTabNavigationOptions,
	createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

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
		<MaterialTopTabs
			screenOptions={{
				tabBarActiveTintColor: theme.colors.focus,
				tabBarInactiveTintColor: theme.colors.text,
				tabBarLabelStyle: {
					fontSize: 14,
					fontWeight: 'bold',
					textTransform: 'capitalize',
				},
				tabBarIndicatorStyle: { backgroundColor: theme.colors.focus, height: 2 },
				tabBarStyle: { backgroundColor: theme.colors.primary },
			}}
		>
			<MaterialTopTabs.Screen name="index" options={{ title: 'All' }} />
			<MaterialTopTabs.Screen name="by-muscles" options={{ title: 'By Muscle' }} />
			<MaterialTopTabs.Screen name="categories" options={{ title: 'By Categories' }} />
		</MaterialTopTabs>
	);
};
