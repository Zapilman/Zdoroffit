import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TAppTheme, useAppTheme } from 'shared/lib/theme';

type TPageLayoutProps = {
	children: ReactNode;
	scrollable?: boolean;
	safe?: boolean;
	style?: ViewStyle;
};

export const PageLayout = ({ children, style, scrollable, safe }: TPageLayoutProps) => {
	const { theme } = useAppTheme();
	const styles = getStyles(theme);

	const Wrapper = safe ? SafeAreaView : View;
	const ContainerComponent = scrollable ? ScrollView : View;

	return (
		<Wrapper style={styles.wrapper}>
			<ContainerComponent style={[styles.layout, style]}>{children}</ContainerComponent>
		</Wrapper>
	);
};

const getStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			backgroundColor: theme.colors.primary,
		},
		layout: {
			flex: 1,
			paddingHorizontal: 20,
		},
	});
