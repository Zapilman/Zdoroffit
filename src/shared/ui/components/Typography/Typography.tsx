import { memo } from 'react';
import { Text } from 'react-native';

import { sizeStyles, useThemeStyles, weightStyles } from './Typography.styles';
import { TTypographyProps } from './Typography.types';

const Typography = ({
	style,
	weight = 'regular',
	kind = 'text',
	size = 'md',
	...otherProps
}: TTypographyProps) => {
	const themeStyles = useThemeStyles(kind);

	return (
		<Text
			style={[weightStyles[weight], sizeStyles[size], themeStyles.typography, style]}
			{...otherProps}
		/>
	);
};

export default memo(Typography);
