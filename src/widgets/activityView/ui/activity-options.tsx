import { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { useActivity } from 'entities/activity';
import { useModal } from 'entities/modal';

import { Colors } from 'shared/config';
import { Button as UIButton } from 'shared/ui';

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
						<UIButton style={styles.button} title="History" />
					</Link>
				)}
				<UIButton style={styles.button} title="Add Note" onPress={handleAddNote} />
				{/* <UIButton style={styles.button} title="Remove" onPress={handleRemoveActivity} /> */}
				<Button mode="contained" onPress={handleRemoveActivity}>
					Remove
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
