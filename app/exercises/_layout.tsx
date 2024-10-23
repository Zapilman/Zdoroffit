import {
	MaterialTopTabNavigationEventMap,
	MaterialTopTabNavigationOptions,
	createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import { Colors } from 'shared/config';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
	MaterialTopTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	MaterialTopTabNavigationEventMap
>(Navigator);

export default () => (
	<MaterialTopTabs
		screenOptions={{
			tabBarActiveTintColor: Colors.PRIMARY,
			tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' },
			tabBarIndicatorStyle: { backgroundColor: Colors.PRIMARY, height: 2 },
		}}
	>
		<MaterialTopTabs.Screen name="index" options={{ title: 'All' }} />
		<MaterialTopTabs.Screen name="by-muscles" options={{ title: 'By Muscle' }} />
		<MaterialTopTabs.Screen name="categories" options={{ title: 'By Categories' }} />
	</MaterialTopTabs>
);
