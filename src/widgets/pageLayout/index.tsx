import { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TPageLayoutProps = {
	children: ReactNode;
	style?: ViewStyle;
};

export const PageLayout = ({ children, style }: TPageLayoutProps) => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView style={[styles.layout, style]}>{children}</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	layout: {
		paddingHorizontal: 20,
	},
});
