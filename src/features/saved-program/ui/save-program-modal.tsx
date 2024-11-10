import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Typography } from 'shared/ui';
import { Modal } from 'shared/ui/components/Modal';
import ControlledInput from 'shared/ui/components/controlled-input';

type TProgramForm = {
	name: string;
};

type TSaveProgramModalProps = {
	closeModal: (data: TProgramForm | null) => void;
};

export const SaveProgramModal = memo(({ closeModal }: TSaveProgramModalProps) => {
	const methods = useForm<TProgramForm>({
		defaultValues: {
			name: '',
		},
	});

	const handleSave = (data: TProgramForm) => {
		closeModal(data);
	};

	return (
		<Modal onClose={() => closeModal(null)}>
			<FormProvider {...methods}>
				<Modal.Title>
					<Typography>Program Name</Typography>
				</Modal.Title>

				<ControlledInput labelText="name" control={methods.control} name="name" />

				<Modal.Actions>
					<Button title="Save Program" onPress={methods.handleSubmit(handleSave)} />
				</Modal.Actions>
			</FormProvider>
		</Modal>
	);
});
