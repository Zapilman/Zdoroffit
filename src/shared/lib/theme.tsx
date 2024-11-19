import { ReactNode, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';

import { DARK_THEME, LIGHT_THEME } from 'shared/config';

const DesignTokens = ['primary', 'secondary', 'accent', 'text', 'focus'] as const;

export type TAppTheme = {
	colors: Record<(typeof DesignTokens)[number], string>;
	dark: boolean;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

	useEffect(() => {
		const event = Appearance.addChangeListener(({ colorScheme }) => {
			setColorScheme(colorScheme);
		});

		return () => event.remove();
	}, []);

	const isDarkTheme = colorScheme === 'dark';

	const theme = {
		...DefaultTheme,
		dark: isDarkTheme,
		colors: {
			...DefaultTheme.colors,
			...(isDarkTheme ? DARK_THEME : LIGHT_THEME).colors,
		},
	} satisfies TAppTheme;

	return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export const useAppTheme = () => {
	const theme = useTheme<TAppTheme>();

	const toggleTheme = () => Appearance.setColorScheme(theme.dark ? 'light' : 'dark');

	return {
		theme,
		toggleTheme,
	};
};
