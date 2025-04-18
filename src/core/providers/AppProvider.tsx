import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from 'shared/lib/theme';
import { queryClient } from 'shared/servises/api';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<BottomSheetModalProvider>
					<GestureHandlerRootView style={styles.container}>{children}</GestureHandlerRootView>
				</BottomSheetModalProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
