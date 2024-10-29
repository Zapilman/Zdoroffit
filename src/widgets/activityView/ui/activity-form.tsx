import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
	ActivityProgressForm,
	TActivityFormEditFields,
	defaultProgressFormValues,
	useActivityProgress,
} from 'features/activities/manage-progress';

import { Button } from 'shared/ui';

type TActivityFormProps = {
	activityId: string;
	onSave: () => void;
};

export const ActivityForm = memo(({ activityId, onSave }: TActivityFormProps) => {
	const { progress, saveProgress } = useActivityProgress(activityId);
	const methods = useForm<TActivityFormEditFields>({
		defaultValues: {
			[activityId]: progress || defaultProgressFormValues,
		},
	});

	const handleSave = (data: TActivityFormEditFields) => {
		saveProgress(data, activityId);
		onSave();
	};

	return (
		<FormProvider {...methods}>
			<ActivityProgressForm fieldPrefix={activityId} />
			<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
		</FormProvider>
	);
});
