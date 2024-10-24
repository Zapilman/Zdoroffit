import { ReactNode, memo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TPageLayoutProps = {
	children: ReactNode;
};

export const PageLayout = ({ children }: TPageLayoutProps) => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView style={styles.layout}>{children}</ScrollView>
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
