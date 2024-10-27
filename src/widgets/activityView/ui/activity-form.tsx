import { memo, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'shared/config';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';
import { ActivitySet } from './activity-set';
import { AddSet } from './add-set';

export const ActivityForm = memo(() => {
	const { control } = useFormContext<TActivityFormEditFields>();
	const { fields, append } = useFieldArray({ control, name: EActivityFieldNames.SET_SETTINGS });

	const handleAddSet = useCallback(() => {
		append({
			[EActivityFieldNames.SET_COUNT]: 0,
			[EActivityFieldNames.REP_COUNT]: 0,
		});
	}, []);

	return (
		<View>
			{fields.map((field, index) => (
				<View key={field.id} style={styles.setWrapper}>
					<ActivitySet orderNum={index + 1} style={styles.set} />
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
