import { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { useActivity } from 'entities/activity';
import { useModal } from 'entities/modal';

import { Colors } from 'shared/config';
import { Button } from 'shared/ui';

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
			const noteRes = await noteModal.showModal({ title: 'add Note' });
			if (noteRes?.note) {
				onAddNote?.(noteRes.note);
			}
		}, [onAddNote]);

		return (
			<View style={styles.buttonGroup}>
				{exerciseId && (
					<Link href={`${PathRoutes.EXERCISE_HISTORY}/${exerciseId}`} asChild>
						<Button style={styles.button} title="History" />
					</Link>
				)}
				<Button style={styles.button} title="Add Note" onPress={handleAddNote} />
				<Button style={styles.button} title="Remove" onPress={handleRemoveActivity} />
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
