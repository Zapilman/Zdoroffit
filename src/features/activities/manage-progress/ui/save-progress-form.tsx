import { memo, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { View } from 'react-native';

import ProgressList from 'shared/ui/components/progress-list';

import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';
import { ActivitySet } from './activity-set';
import { AddSet } from './add-set';

type TActivityProgressFormProps = {
	fieldPrefix: string;
};

export const ActivityProgressForm = memo(({ fieldPrefix }: TActivityProgressFormProps) => {
	const { control } = useFormContext<TActivityFormEditFields>();

	const { fields, append, remove } = useFieldArray({
		control,
		name: `${fieldPrefix}.${EActivityFieldNames.SET_SETTINGS}`,
	});

	const handleAddSet = useCallback(() => {
		append({
			[EActivityFieldNames.LIFTED_WEIGHT]: '',
			[EActivityFieldNames.REP_COUNT]: '',
			[EActivityFieldNames.SET_NOTES]: [],
		});
	}, []);

	const handleRemoveSet = useCallback(
		(index: number) => () => {
			remove(index);
		},
		[remove],
	);

	return (
		<View>
			<ProgressList
				list={fields}
				keyExtractor={(field) => field.id}
				renderItem={(_, index) => (
					<ActivitySet
						fieldPrefix={`${fieldPrefix}.${EActivityFieldNames.SET_SETTINGS}.${index}`}
						removeSet={handleRemoveSet(index)}
					/>
				)}
			/>
			<AddSet onPress={handleAddSet} />
		</View>
	);
});
