import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { Colors } from 'shared/config';
import { Button } from 'shared/ui';

type TActivityOptionButtonsProps = {
	exerciseId?: string;
};

export const ActivityOptionButtons = memo(({ exerciseId }: TActivityOptionButtonsProps) => {
	return (
		<View style={styles.buttonGroup}>
			{exerciseId && (
				<Link href={`${PathRoutes.EXERCISE_HISTORY}/${exerciseId}`} asChild>
					<Button style={styles.button} title="History" />
				</Link>
			)}
			<Button style={styles.button} title="Add Note" />
			<Button style={styles.button} title="Remove" />
		</View>
	);
});

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
