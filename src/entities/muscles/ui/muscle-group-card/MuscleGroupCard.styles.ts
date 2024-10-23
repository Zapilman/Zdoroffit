import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		marginBottom: 20,
	},
	cardImage: {
		width: 70,
		height: 70,
		resizeMode: 'contain',
	},
	cardInfo: {
		flexGrow: 1,
	},
});
