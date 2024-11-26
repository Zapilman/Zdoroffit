import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import { PortalProvider } from '@gorhom/portal';

import { ModalProvider } from 'entities/modal';

import { BottomModalProvider } from 'shared/lib/bottom-modal';
import { TAppTheme, useAppTheme } from 'shared/lib/theme';

export const OpenLayout = ({ children }: { children: ReactNode }) => {
	const { theme, toggleTheme } = useAppTheme();
	const styles = getStyles(theme);

	return (
		<View style={styles.wrapper}>
			<Button onPress={toggleTheme} mode="contained">
				Open
			</Button>
			<PortalProvider>
				<ModalProvider>
					<BottomModalProvider>{children}</BottomModalProvider>
				</ModalProvider>
			</PortalProvider>
			<Toast />
		</View>
	);
};

const getStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		wrapper: {
			backgroundColor: theme.colors.primary,
			flex: 1,
		},
	});
