import { memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { Colors } from 'shared/config';
import ControlledInput from 'shared/ui/components/controlled-input';
import { DotsIcon } from 'shared/ui/icons';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';
import { useSettingsContext } from './settings-context';

type TActivitySetProps = {
	fieldPrefix: `${string}.${EActivityFieldNames.SET_SETTINGS}.${number}`;
} & ViewProps;

export const ActivitySet = memo(({ fieldPrefix, style, ...otherProps }: TActivitySetProps) => {
	const { control } = useFormContext<TActivityFormEditFields>();
	const { settingsModalRef } = useSettingsContext();

	const handleOptionPress = useCallback(() => {
		settingsModalRef.current?.expand();
	}, []);

	return (
		<>
			<View style={[styles.setWrapper, style]} {...otherProps}>
				<ControlledInput
					labelText="reps"
					style={styles.setInput}
					control={control}
					name={`${fieldPrefix}.${EActivityFieldNames.REP_COUNT}`}
					inputProps={{
						keyboardType: 'number-pad',
					}}
				/>
				<ControlledInput
					labelText="weight"
					style={styles.setInput}
					control={control}
					name={`${fieldPrefix}.${EActivityFieldNames.LIFTED_WEIGHT}`}
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
});

const styles = StyleSheet.create({
	setWrapper: {
		flexDirection: 'row',
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
