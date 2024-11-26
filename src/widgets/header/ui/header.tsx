import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Typography } from 'shared/ui/components/Typography';
import { DotsIcon } from 'shared/ui/icons';

const Header = ({ onOptionPress }: { onOptionPress: () => void }) => {
	return (
		<View style={styles.header}>
			<Typography size="lg" weight="bold">
				Zdoroffit
			</Typography>
			<Pressable onPress={onOptionPress}>
				<DotsIcon />
			</Pressable>
		</View>
	);
};

export default memo(Header);

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
	},
});
