import { Pressable, StyleSheet, View } from 'react-native';

import { Typography } from 'shared/ui/components/Typography';

type TListOptionProps = {
	title: string;
	description: string;
	result: string;
	onPress?: () => void;
};

export const ListOption = ({ title, description, result, onPress }: TListOptionProps) => {
	return (
		<Pressable style={styles.option} onPress={onPress}>
			<View style={styles.title}>
				<Typography>{title}</Typography>
				<Typography weight="bold" kind="focus">
					{result}
				</Typography>
			</View>
			<Typography>{description}</Typography>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	option: {
		flexDirection: 'column',
		gap: 10,
		paddingVertical: 10,
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
