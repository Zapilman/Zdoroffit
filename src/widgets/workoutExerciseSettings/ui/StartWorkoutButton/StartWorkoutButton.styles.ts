import { StyleSheet } from 'react-native';
import { TABBAR_BOTTOM_INSENT, TABBAR_HEIGHT } from 'shared/config/tabbar';

export const getButtonStyles = (bottomInsent: number) =>
	StyleSheet.create({
		button: {
			position: 'absolute',
			bottom: bottomInsent + TABBAR_BOTTOM_INSENT + TABBAR_HEIGHT + 40,
			left: 0,
			right: 0,
			paddingHorizontal: 20,
		},
	});
