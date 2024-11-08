import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';

import {
	TExerciseHistoryItem,
	formatHistoryForImport,
	validateHistory,
} from 'entities/exercise-history';

import { Button, ControlledInput, Typography } from 'shared/ui';
import { Modal } from 'shared/ui/components/Modal';

import { EImportHistoryFieldNames, TImportHistoryFields } from '../model/types';

type TImportHistoryModalProps = {
	closeModal: (data: { history: Record<string, TExerciseHistoryItem> } | null) => void;
};

export const ImportHistoryModal = ({ closeModal }: TImportHistoryModalProps) => {
	const methods = useForm<TImportHistoryFields>({
		defaultValues: {
			[EImportHistoryFieldNames.CONFIG]: '',
		},
	});

	const handleSave = (data: TImportHistoryFields) => {
		const newHistory = JSON.parse(data[EImportHistoryFieldNames.CONFIG]);
		if (validateHistory(newHistory))
			closeModal({
				history: formatHistoryForImport(newHistory),
			});
	};

	return (
		<Modal onClose={() => closeModal(null)}>
			<Modal.Title>
				<Typography kind="accent" size="lg">
					Import History Config
				</Typography>
			</Modal.Title>
			<FormProvider {...methods}>
				<View>
					<ControlledInput
						control={methods.control}
						name={EImportHistoryFieldNames.CONFIG}
						labelText="config"
					/>
				</View>
				<Modal.Actions>
					<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
				</Modal.Actions>
			</FormProvider>
		</Modal>
	);
};
