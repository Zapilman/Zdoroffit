import { TextProps } from 'react-native';

import { TAppTheme } from 'shared/lib/theme';

export type TTypographyKind = keyof TAppTheme['colors'];
export type TTypographyWeight = 'bold' | 'regular';
export type TTypographySize = 'sm' | 'md' | 'lg';

export type TTypographyProps = TextProps & {
	weight?: TTypographyWeight;
	kind?: TTypographyKind;
	size?: TTypographySize;
};
