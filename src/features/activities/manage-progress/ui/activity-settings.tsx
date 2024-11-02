import { memo } from 'react';

import { Button, Typography } from 'shared/ui';
import { Modal } from 'shared/ui/components/Modal';

type TActivitySettingsProps = {
	onAddNote: () => void;
	onRemove: () => void;

	closeModal: () => void;
};

export const ActivitySettings = memo(
	({ onAddNote, onRemove, closeModal }: TActivitySettingsProps) => {
		return (
			<Modal onClose={closeModal}>
				<Modal.Title>
					<Typography>Set Actions</Typography>
				</Modal.Title>
				<Button title="Add Note" onPress={onAddNote} />
				<Button title="Remove from Workout" onPress={onRemove} />
				<Modal.Actions />
			</Modal>
		);
	},
);
