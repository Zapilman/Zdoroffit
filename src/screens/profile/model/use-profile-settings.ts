import { useRouter } from 'expo-router';

import { Routes } from 'shared/config/routes';
import { useAppTheme } from 'shared/lib/theme';

import { TProfileOption } from './types';

export const useProfileSettings = (): TProfileOption[] => {
	const router = useRouter();
	const { theme } = useAppTheme();

	const themeSettings: TProfileOption = {
		title: 'Theme',
		description: 'Change app theme',
		result: theme.dark ? 'Dark' : 'Light',
		onPress: () => router.push(Routes.THEME_SETTINGS),
	};

	const syncSettings: TProfileOption = {
		title: 'Sync',
		description: 'Sync data with your account',
		result: 'Synced',
	};

	return [themeSettings, syncSettings];
};
