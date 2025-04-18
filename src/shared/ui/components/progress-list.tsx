import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'shared/config';
import { TAppTheme, useAppTheme } from 'shared/lib/theme';
import { typedMemo } from 'shared/types/react';

import Typography from './Typography/Typography';

type TProgressListProps<ListItem extends Record<string, unknown>> = {
	list: ListItem[];
	renderItem: (listItem: ListItem, index: number) => ReactNode;
	keyExtractor: (listItem: ListItem, index: number) => string;
};

const ProgressList = <ListItem extends Record<string, unknown>>({
	list,
	renderItem,
	keyExtractor,
}: TProgressListProps<ListItem>) => {
	const { theme } = useAppTheme();
	const themeStyles = getThemeStyles(theme);

	return list.map((listItem, index) => (
		<View key={keyExtractor(listItem, index)} style={styles.listItem}>
			<View style={styles.orderWrapper}>
				<Typography style={[styles.order, themeStyles.order]}>{index + 1}</Typography>
				<View style={styles.item}>{renderItem(listItem, index)}</View>
			</View>
			{index < list.length - 1 && <View style={[styles.progressLine, themeStyles.progressLine]} />}
		</View>
	));
};

export default typedMemo(ProgressList);

const getThemeStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		progressLine: {
			backgroundColor: theme.colors.focus,
		},
		order: {
			backgroundColor: theme.colors.primary,
			borderWidth: 2,
			borderColor: theme.colors.focus,
		},
	});

const styles = StyleSheet.create({
	listItem: {
		paddingBottom: 20,
		position: 'relative',
	},
	orderWrapper: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		gap: 20,
	},
	progressLine: {
		position: 'absolute',
		width: 2,
		height: '100%',
		left: 15,
		top: 30,
		zIndex: 1,
	},
	order: {
		alignSelf: 'flex-start',
		backgroundColor: Colors.SECONDARY,
		borderRadius: 50,
		padding: 5,
		width: 30,
		height: 30,
		textAlign: 'center',
		zIndex: 2,
	},
	item: {
		flex: 1,
	},
});
