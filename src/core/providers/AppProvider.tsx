import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<BottomSheetModalProvider>
			<GestureHandlerRootView style={styles.container}>{children}</GestureHandlerRootView>
		</BottomSheetModalProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
