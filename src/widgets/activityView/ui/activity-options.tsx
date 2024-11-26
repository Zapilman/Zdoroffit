import { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Link } from 'expo-router';

import { useActivity } from 'entities/activity';
import { useModal } from 'entities/modal';

import { Colors } from 'shared/config';
import { Routes } from 'shared/config/routes';
import { Typography } from 'shared/ui/components/Typography';

import { NoteModal } from './note-modal';

type TActivityOptionButtonsProps = {
	exerciseId?: string;
	activityId: string;
	onAddNote?: (note: string) => void;
};

export const ActivityOptionButtons = memo(
	({ exerciseId, activityId, onAddNote }: TActivityOptionButtonsProps) => {
		const removeActivity = useActivity((state) => state.removeActivity);

		const noteModal = useModal<{ note: string }>()(NoteModal);

		const handleRemoveActivity = useCallback(() => {
			removeActivity(activityId);
		}, [activityId]);

		const handleAddNote = useCallback(async () => {
			const noteRes = await noteModal.showModal({ title: 'Add Note' });
			if (noteRes?.note) {
				onAddNote?.(noteRes.note);
			}
		}, [onAddNote]);

		return (
			<View style={styles.buttonGroup}>
				{exerciseId && (
					<Link href={`${Routes.EXERCISE_HISTORY}/${exerciseId}`} asChild>
						<Button mode="outlined">
							<Typography>History</Typography>
						</Button>
					</Link>
				)}
				<Button mode="outlined" onPress={handleAddNote}>
					<Typography>Add Note</Typography>
				</Button>
				<Button mode="outlined" onPress={handleRemoveActivity}>
					<Typography>Remove</Typography>
				</Button>
			</View>
		);
	},
);

const styles = StyleSheet.create({
	buttonGroup: {
		flexDirection: 'row',
		gap: 10,
		justifyContent: 'center',
	},
	button: {
		borderColor: Colors.ACCENT,
		borderWidth: 2,
		borderRadius: 50,
	},
});
