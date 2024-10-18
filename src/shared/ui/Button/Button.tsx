import { memo } from 'react';
import { Pressable, View, PressableProps } from 'react-native';
import { styles } from './Button.styles';
import Typography from '../Typography/Typography';

const Button = ({ title, ...otherProps }: PressableProps & { title: string }) => {
	return (
		<Pressable {...otherProps}>
			<View style={styles.button}>
				<Typography weight="bold" kind="accent">
					{title}
				</Typography>
			</View>
		</Pressable>
	);
};

export default memo(Button);
