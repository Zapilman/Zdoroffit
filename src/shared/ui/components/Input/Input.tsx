import { ComponentProps, memo } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { EFontFamily } from 'shared/config';
import { TAppTheme, useAppTheme } from 'shared/lib/theme';

import { Typography } from '../Typography';

type TInputProps = ComponentProps<typeof TextInput>;

const Input = ({ style, label, ...otherProps }: TInputProps) => {
	const { theme } = useAppTheme();
	const themeStyles = getThemeStyles(theme);

	return (
		<TextInput
			{...otherProps}
			label={<Typography kind="text">{label}</Typography>}
			textColor={theme.colors.focus}
			contentStyle={themeStyles.inputWrapper}
			style={[themeStyles.input, style]}
			underlineColor="transparent"
		/>
	);
};

export default memo(Input);

const getThemeStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		inputWrapper: {
			paddingHorizontal: 10,
			paddingVertical: 5,
			borderWidth: 1,
			borderColor: theme.colors.focus,
			borderRadius: 5,
			fontFamily: EFontFamily.ROBOTO_REGULAR,
			fontSize: 14,
			// backgroundColor: theme.colors.primary,
		},
		input: {
			backgroundColor: theme.colors.primary,
		},
	});
