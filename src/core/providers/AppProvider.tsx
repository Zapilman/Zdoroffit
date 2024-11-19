import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { ThemeProvider } from 'shared/lib/theme';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider>
			<BottomSheetModalProvider>
				<GestureHandlerRootView style={styles.container}>{children}</GestureHandlerRootView>
			</BottomSheetModalProvider>
		</ThemeProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
