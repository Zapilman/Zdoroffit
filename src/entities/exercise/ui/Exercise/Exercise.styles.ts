import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	exercise: {
		flexDirection: 'row',
		alignContent: 'center',
		columnGap: 20,
		paddingHorizontal: 20,
	},
	image: {
		width: 50,
		height: 70,
		borderRadius: 5,
	},
	exerciseInfo: {
		justifyContent: 'center',
		flexGrow: 1,
	},
	optionIcon: {
		alignSelf: 'center',
		transform: [{ rotate: '90deg' }],
	},
});
