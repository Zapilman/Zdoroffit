import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography } from 'shared/ui';

import { HeaderOptionButton } from './option-button';

const Header = () => {
	return (
		<View style={styles.header}>
			<Typography size="lg" weight="bold">
				Zdoroffit
			</Typography>
			<HeaderOptionButton />
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
