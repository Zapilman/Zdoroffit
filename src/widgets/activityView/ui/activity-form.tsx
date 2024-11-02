import { memo, useCallback } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import {
	ActivityProgressForm,
	TActivityFormEditFields,
	defaultProgressFormValues,
	useActivityProgress,
} from 'features/activities/manage-progress';
import { EActivityFieldNames } from 'features/activities/manage-progress/model/formTypes';

import { Button } from 'shared/ui';
import ControlledInput from 'shared/ui/components/controlled-input';

import { ActivityOptionButtons } from './activity-options';

type TActivityFormProps = {
	activityId: string;
	exerciseId: string;
	onSave: () => void;
};

export const ActivityForm = memo(({ activityId, onSave, exerciseId }: TActivityFormProps) => {
	const { progress, saveProgress } = useActivityProgress(activityId);

	const methods = useForm<TActivityFormEditFields>({
		defaultValues: {
			[activityId]: progress || defaultProgressFormValues,
		},
	});

	const { fields, append } = useFieldArray({
		control: methods.control,
		name: `${activityId}.${EActivityFieldNames.GENERAL_NOTES}`,
	});

	const handleSave = (data: TActivityFormEditFields) => {
		saveProgress(data, exerciseId);
		onSave();
	};

	const handleAppendNote = useCallback(
		(note: string) => {
			if (fields.length === 0) {
				append({
					[EActivityFieldNames.GENERAL_NOTE]: note,
				});
			} else {
				methods.setValue(`${activityId}.${EActivityFieldNames.GENERAL_NOTES}.0`, {
					general_note: note,
				});
			}
		},
		[fields.length],
	);

	return (
		<FormProvider {...methods}>
			<ActivityOptionButtons
				exerciseId={exerciseId}
				activityId={activityId}
				onAddNote={handleAppendNote}
			/>
			{fields.map((field) => (
				<>
					<ControlledInput
						key={field.id}
						control={methods.control}
						name={`${activityId}.${EActivityFieldNames.GENERAL_NOTES}.0.${EActivityFieldNames.GENERAL_NOTE}`}
						labelText="note"
						inputProps={{
							placeholder: 'Note...',
						}}
					/>
				</>
			))}
			<ActivityProgressForm fieldPrefix={activityId} />
			<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
		</FormProvider>
	);
});
