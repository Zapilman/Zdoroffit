import { TextProps } from 'react-native';

export type TTypographyKind = 'primary' | 'accent' | 'secondary' | 'default';
export type TTypographyWeight = 'bold' | 'regular';
export type TTypographySize = 'sm' | 'md' | 'lg';

export type TTypographyProps = TextProps & {
	weight?: TTypographyWeight;
	kind?: TTypographyKind;
	size?: TTypographySize;
};
