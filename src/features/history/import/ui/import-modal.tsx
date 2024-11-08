import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { TExerciseHistoryItem } from 'entities/exercise-history';

import { Button, ControlledInput, Typography } from 'shared/ui';
import { Modal } from 'shared/ui/components/Modal';

import { EImportHistoryFieldNames, TImportHistoryFields } from '../model/types';

type TImportHistoryModalProps = {
	closeModal: (data: { history: Record<string, TExerciseHistoryItem> } | null) => void;
};

const validateHistory = (
	history: Record<string, unknown>,
): history is Record<string, TExerciseHistoryItem> => {
	Object.values(history).forEach((historyItem) => {
		if (typeof historyItem !== 'object' || historyItem === null) {
			return false;
		}

		if (!('exerciseId' in historyItem)) {
			return false;
		}
	});
	return true;
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
				history: newHistory,
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
