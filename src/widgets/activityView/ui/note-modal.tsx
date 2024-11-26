import { memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Button } from 'shared/ui';
import { Modal } from 'shared/ui/components/Modal';
import { Typography } from 'shared/ui/components/Typography';
import ControlledInput from 'shared/ui/components/controlled-input';

type TNoteModalProps = {
	closeModal: (value: { note: string } | null) => void;
	title: string;
};

type TNoteModalFields = {
	note: string;
};

export const NoteModal = memo(({ closeModal, title }: TNoteModalProps) => {
	const methods = useForm<TNoteModalFields>({
		defaultValues: {
			note: '',
		},
	});

	const handleSave = useCallback(
		(data: TNoteModalFields) => {
			closeModal(data);
		},
		[closeModal],
	);

	return (
		<Modal onClose={() => closeModal(null)}>
			<Modal.Title>
				<Typography kind="text" size="lg">
					{title}
				</Typography>
			</Modal.Title>
			<FormProvider {...methods}>
				<View>
					<ControlledInput control={methods.control} name="note" label="note" />
				</View>
				<Modal.Actions>
					<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
				</Modal.Actions>
			</FormProvider>
		</Modal>
	);
});
