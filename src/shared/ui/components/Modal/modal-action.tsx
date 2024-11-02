import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { typedMemo } from 'shared/types/react';
import { Button } from 'shared/ui/Button';

import { useModalContext } from './modal-context';

export const ModalActions = typedMemo(({ children }: { children?: ReactNode }) => {
	const { onClose } = useModalContext();

	return (
		<View style={styles.actions}>
			<Button title="Cancel" onPress={onClose} />
			{children}
		</View>
	);
});

const styles = StyleSheet.create({
	actions: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		gap: 10,
	},
});
