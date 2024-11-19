import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TAppTheme, useAppTheme } from 'shared/lib/theme';

type TPageLayoutProps = {
	children: ReactNode;
	scrollable?: boolean;
	style?: ViewStyle;
};

export const PageLayout = ({ children, style, scrollable }: TPageLayoutProps) => {
	const { theme } = useAppTheme();

	const styles = getStyles(theme);

	const ContainerComponent = scrollable ? ScrollView : View;

	return (
		<SafeAreaView style={styles.wrapper}>
			<ContainerComponent style={[styles.layout, style]}>{children}</ContainerComponent>
		</SafeAreaView>
	);
};

const getStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
		},
		layout: {
			flex: 1,
			paddingHorizontal: 20,
			backgroundColor: theme.colors.primary,
		},
	});
