import { memo } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

import Typography from '../components/Typography/Typography';
import { styles } from './Button.styles';

const Button = ({ title, style, ...otherProps }: PressableProps & { title: string }) => {
	return (
		<Pressable style={[styles.button, style as StyleProp<ViewStyle>]} {...otherProps}>
			<Typography weight="bold" kind="accent">
				{title}
			</Typography>
		</Pressable>
	);
};

export default memo(Button);
