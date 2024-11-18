import { ReactNode } from 'react';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

import { DARK_THEME } from 'shared/config';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const theme = {
		...DefaultTheme,
		dark: true,
		colors: {
			...DefaultTheme.colors,
			...DARK_THEME.colors,
		},
	};

	return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
