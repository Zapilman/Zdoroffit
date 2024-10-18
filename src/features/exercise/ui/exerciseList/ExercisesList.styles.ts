import { StyleSheet } from 'react-native';
import { Colors } from 'shared/config';

export const styles = StyleSheet.create({
	exerciseWrapper: {
		position: 'relative',
	},
	exerciseCard: {
		marginTop: 30,
		zIndex: 2,
	},
	stepLine: {
		width: 2,
		height: '100%',
		backgroundColor: Colors.PRIMARY,
		position: 'absolute',
		left: 45,
		top: '50%',
		zIndex: 1,
	},
});
