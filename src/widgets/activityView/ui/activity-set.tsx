import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';
import ControlledInput from 'shared/ui/components/controlled-input';
import { DotsIcon } from 'shared/ui/icons';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';

type TActivitySetProps = {
	orderNum: number;
} & ViewProps;

export const ActivitySet = memo(({ orderNum, style, ...otherProps }: TActivitySetProps) => {
	const { control } = useFormContext<TActivityFormEditFields>();
	return (
		<>
			<View style={[styles.setWrapper, style]} {...otherProps}>
				<Typography style={styles.order}>{orderNum}</Typography>
				<ControlledInput
					labelText="asdsa"
					style={styles.setInput}
					control={control}
					name={`${EActivityFieldNames.SET_SETTINGS}.${orderNum - 1}.${
						EActivityFieldNames.SET_COUNT
					}`}
					inputProps={{
						keyboardType: 'number-pad',
					}}
				/>
				<ControlledInput
					labelText="asdsa"
					style={styles.setInput}
					control={control}
					name={`${EActivityFieldNames.SET_SETTINGS}.${orderNum - 1}.${
						EActivityFieldNames.REP_COUNT
					}`}
					inputProps={{
						keyboardType: 'number-pad',
					}}
				/>
				<Pressable>
					<DotsIcon />
				</Pressable>
			</View>
		</>
	);
});

const styles = StyleSheet.create({
	setWrapper: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		gap: 20,
	},
	order: {
		backgroundColor: Colors.SECONDARY,
		borderRadius: 50,
		padding: 5,
		width: 30,
		height: 30,
		textAlign: 'center',
	},
	setInput: {
		flex: 1,
	},
});
