import { memo, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { useModal } from 'entities/modal';

import ControlledInput from 'shared/ui/components/controlled-input';
import { DotsIcon } from 'shared/ui/icons';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';
import { ActivitySettings } from './activity-settings';

type TActivitySetProps = {
	fieldPrefix: `${string}.${EActivityFieldNames.SET_SETTINGS}.${number}`;
	removeSet: () => void;
} & ViewProps;

export const ActivitySet = memo(
	({ fieldPrefix, removeSet, style, ...otherProps }: TActivitySetProps) => {
		const { control } = useFormContext<TActivityFormEditFields>();
		const settingsModal = useModal()(ActivitySettings);

		const { fields, append } = useFieldArray({
			control,
			name: `${fieldPrefix}.${EActivityFieldNames.SET_NOTES}`,
		});

		const handleOpenModal = useCallback(async () => {
			await settingsModal.showModal({
				onRemove: () => {
					removeSet();
					settingsModal.closeModal(null);
				},
				onAddNote: () => {
					if (fields.length === 0) {
						append({ [EActivityFieldNames.SET_NOTE]: '' });
						settingsModal.closeModal(null);
					}
				},
			});
		}, [settingsModal, removeSet]);

		return (
			<View style={styles.wrapper}>
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
					<Pressable onPress={handleOpenModal}>
						<DotsIcon />
					</Pressable>
				</View>

				{fields.map((field, index) => (
					<ControlledInput
						control={control}
						key={field.id}
						labelText="Note"
						name={`${fieldPrefix}.${EActivityFieldNames.SET_NOTES}.${index}.${EActivityFieldNames.SET_NOTE}`}
					/>
				))}
			</View>
		);
	},
);

const styles = StyleSheet.create({
	wrapper: {
		gap: 20,
	},
	setWrapper: {
		flexDirection: 'row',
		gap: 20,
		alignItems: 'center',
	},
	setInput: {
		flex: 1,
	},
});
