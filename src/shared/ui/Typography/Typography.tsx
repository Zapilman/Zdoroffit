import { memo } from 'react';
import { Text } from 'react-native';
import { TTypographyProps } from './Typography.types';

import { colorStyles, sizeStyles, styles, weightStyles } from './Typography.styles';

const Typography = ({
	style,
	weight = 'regular',
	kind = 'default',
	size = 'md',
	...otherProps
}: TTypographyProps) => {
	return (
		<Text
			style={[styles.typography, weightStyles[weight], colorStyles[kind], sizeStyles[size], style]}
			{...otherProps}
		/>
	);
};

export default memo(Typography);
