import { memo, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewProps } from 'react-native';

import { Colors, EFontFamily } from 'shared/config';
import Typography from 'shared/ui/components/Typography/Typography';

type TInputProps = ViewProps & {
	labelText: string;
	inputProps?: TextInputProps;
};

const Input = ({ inputProps, labelText, style, ...otherProps }: TInputProps) => {
	const [focused, setFocused] = useState(false);

	return (
		<View style={[styles.inputWrapper, style]} {...otherProps}>
			<Typography
				style={[styles.inputLabel, !focused && styles.inputLabelInActive]}
				kind="secondary"
			>
				{labelText}
			</Typography>
			<TextInput
				style={[styles.input, focused && styles.inputFocused]}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				cursorColor={Colors.SECONDARY}
				enterKeyHint="enter"
				{...inputProps}
			/>
		</View>
	);
};

export default memo(Input);

const styles = StyleSheet.create({
	inputWrapper: {
		position: 'relative',
	},
	inputLabel: {
		position: 'absolute',
		top: -10,
		paddingHorizontal: 5,
		left: 10,
		zIndex: 2,
		backgroundColor: Colors.PRIMARY,
	},
	inputLabelInActive: {
		display: 'none',
	},
	input: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderWidth: 2,
		borderColor: Colors.ACCENT,
		borderRadius: 5,
		fontFamily: EFontFamily.ROBOTO_REGULAR,
		color: Colors.ACCENT,
		fontSize: 14,
	},
	inputFocused: {
		borderColor: Colors.SECONDARY,
	},
});
