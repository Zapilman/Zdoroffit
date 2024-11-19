import { StyleSheet, TextStyle } from 'react-native';

import { EFontFamily } from 'shared/config';
import { TAppTheme, useAppTheme } from 'shared/lib/theme';

import { TTypographyKind, TTypographySize, TTypographyWeight } from './Typography.types';

export const weightStyles: Record<TTypographyWeight, TextStyle> = {
	bold: {
		fontFamily: EFontFamily.ROBOTO_BOLD,
	},
	regular: {
		fontFamily: EFontFamily.ROBOTO_REGULAR,
	},
};

export const sizeStyles: Record<TTypographySize, TextStyle> = {
	sm: {
		fontSize: 12,
	},
	md: { fontSize: 14 },
	lg: { fontSize: 18 },
};

export const getThemeStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		text: {
			color: theme.colors.text,
		},
	});

export const useThemeStyles = (kind: TTypographyKind) => {
	const { theme } = useAppTheme();

	return StyleSheet.create({
		typography: {
			color: theme.colors[kind],
		},
	});
};
