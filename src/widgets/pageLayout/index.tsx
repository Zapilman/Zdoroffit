import { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type TPageLayoutProps = {
	children: ReactNode;
	style?: ViewStyle;
};

export const PageLayout = ({ children, style }: TPageLayoutProps) => {
	const theme = useTheme();
	const styles = getStyles(theme);

	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView style={[styles.layout, style]}>{children}</ScrollView>
		</SafeAreaView>
	);
};

const getStyles = (theme: MD3Theme) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
		},
		layout: {
			paddingHorizontal: 20,
			backgroundColor: theme.colors.primary,
		},
	});
