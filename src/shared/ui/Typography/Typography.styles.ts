import { StyleSheet, TextStyle } from 'react-native';
import { Colors, EFontFamily } from 'shared/config';
import { TTypographyKind, TTypographyWeight, TTypographySize } from './Typography.types';

export const styles = StyleSheet.create({
	typography: {},
});

export const weightStyles: Record<TTypographyWeight, TextStyle> = {
	bold: {
		fontFamily: EFontFamily.ROBOTO_BOLD,
	},
	regular: {
		fontFamily: EFontFamily.ROBOTO_REGULAR,
	},
};

export const colorStyles: Record<TTypographyKind, TextStyle> = {
	accent: {
		color: Colors.ACCENT,
	},
	primary: {
		color: Colors.PRIMARY,
	},
	secondary: {
		color: Colors.SECONDARY,
	},
	default: {
		color: Colors.BLACK,
	},
};

export const sizeStyles: Record<TTypographySize, TextStyle> = {
	sm: {
		fontSize: 12,
	},
	md: { fontSize: 14 },
	lg: { fontSize: 18 },
};
