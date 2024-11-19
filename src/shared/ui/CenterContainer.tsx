import { StyleSheet, View } from 'react-native';

export const CenterContainer = ({ children }: { children: React.ReactNode }) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
