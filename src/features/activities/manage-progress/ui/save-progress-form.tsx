import { memo, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'shared/config';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';
import { ActivitySet } from './activity-set';
import { AddSet } from './add-set';

type TActivityProgressFormProps = {
	fieldPrefix: string;
};

export const ActivityProgressForm = memo(({ fieldPrefix }: TActivityProgressFormProps) => {
	const { control } = useFormContext<TActivityFormEditFields>();

	const { fields, append } = useFieldArray({
		control,
		name: `${fieldPrefix}.${EActivityFieldNames.SET_SETTINGS}`,
	});

	const handleAddSet = useCallback(() => {
		append({
			[EActivityFieldNames.LIFTED_WEIGHT]: '0',
			[EActivityFieldNames.REP_COUNT]: '0',
		});
	}, []);

	return (
		<View>
			{fields.map((field, index) => (
				<View key={field.id} style={styles.setWrapper}>
					<ActivitySet
						orderNum={index + 1}
						style={styles.set}
						fieldPrefix={`${fieldPrefix}.${EActivityFieldNames.SET_SETTINGS}`}
					/>
					<View style={styles.progressLine} />
				</View>
			))}
			<AddSet onPress={handleAddSet} />
		</View>
	);
});

const styles = StyleSheet.create({
	setWrapper: {
		paddingBottom: 20,
		position: 'relative',
	},
	progressLine: {
		position: 'absolute',
		width: 2,
		height: '100%',
		backgroundColor: Colors.ACCENT,
		left: 15,
		top: 30,
	},
	set: {
		zIndex: 2,
	},
});