import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';

import {
	HistoryValidationErrorInvalidFormat,
	HistoryValidationErrorNotExist,
	HistoryValidationErrorNotObject,
	TExerciseHistoryItem,
	formatHistoryForImport,
	validateHistory,
} from 'entities/exercise-history';

import { Button, ControlledInput } from 'shared/ui';
import { Modal } from 'shared/ui/components/Modal';
import { Typography } from 'shared/ui/components/Typography';

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
		try {
			if (validateHistory(newHistory))
				closeModal({
					history: formatHistoryForImport(newHistory),
				});
		} catch (error) {
			if (error instanceof HistoryValidationErrorInvalidFormat) alert(error.message);
			if (error instanceof HistoryValidationErrorNotExist) alert(error.message);
			if (error instanceof HistoryValidationErrorNotObject) alert(error.message);
		}
	};

	return (
		<Modal onClose={() => closeModal(null)}>
			<Modal.Title>
				<Typography kind="text" size="lg">
					Import History Config
				</Typography>
			</Modal.Title>
			<FormProvider {...methods}>
				<View>
					<ControlledInput
						control={methods.control}
						name={EImportHistoryFieldNames.CONFIG}
						label="config"
					/>
				</View>
				<Modal.Actions>
					<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
				</Modal.Actions>
			</FormProvider>
		</Modal>
	);
};
