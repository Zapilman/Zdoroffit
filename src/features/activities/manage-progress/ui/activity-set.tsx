import { memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui';
import ControlledInput from 'shared/ui/components/controlled-input';
import { DotsIcon } from 'shared/ui/icons';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';
import { useSettingsContext } from './settings-context';

type TActivitySetProps = {
	orderNum: number;
	fieldPrefix: `${string}.${EActivityFieldNames.SET_SETTINGS}`;
} & ViewProps;

export const ActivitySet = memo(
	({ orderNum, fieldPrefix, style, ...otherProps }: TActivitySetProps) => {
		const { control } = useFormContext<TActivityFormEditFields>();
		const { settingsModalRef } = useSettingsContext();

		const handleOptionPress = useCallback(() => {
			settingsModalRef.current?.expand();
		}, []);

		return (
			<>
				<View style={[styles.setWrapper, style]} {...otherProps}>
					<Typography style={styles.order}>{orderNum}</Typography>
					<ControlledInput
						labelText="reps"
						style={styles.setInput}
						control={control}
						name={`${fieldPrefix}.${orderNum - 1}.${EActivityFieldNames.REP_COUNT}`}
						inputProps={{
							keyboardType: 'number-pad',
						}}
					/>
					<ControlledInput
						labelText="weight"
						style={styles.setInput}
						control={control}
						name={`${fieldPrefix}.${orderNum - 1}.${EActivityFieldNames.LIFTED_WEIGHT}`}
						inputProps={{
							keyboardType: 'number-pad',
						}}
					/>
					<Pressable onPress={handleOptionPress}>
						<DotsIcon />
					</Pressable>
				</View>
			</>
		);
	},
);

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
