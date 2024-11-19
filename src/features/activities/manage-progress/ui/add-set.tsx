import { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Colors } from 'shared/config';
import { Typography } from 'shared/ui/components/Typography';

type TAddSetProps = {
	onPress: () => void;
};

export const AddSet = memo(({ onPress }: TAddSetProps) => {
	return (
		<Pressable style={styles.addSet} onPress={onPress}>
			<Typography style={styles.order}>+</Typography>
			<Typography kind="secondary" size="lg">
				Add Set
			</Typography>
		</Pressable>
	);
});

const styles = StyleSheet.create({
	addSet: {
		flexDirection: 'row',
		gap: 20,
		width: '100%',
		alignItems: 'center',
	},
	order: {
		backgroundColor: Colors.SECONDARY,
		borderRadius: 50,
		padding: 5,
		width: 30,
		height: 30,
		textAlign: 'center',
	},
});
