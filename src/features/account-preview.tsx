import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Typography } from 'shared/ui/components/Typography';

const AccountPreview = () => {
	const loggedIn = false;

	return loggedIn ? (
		<View style={styles.preview}>
			<View style={styles.accountImage} />
			<Typography>Account Preview</Typography>
		</View>
	) : (
		<Button mode="contained-tonal">Log in</Button>
	);
};

export default memo(AccountPreview);

const styles = StyleSheet.create({
	preview: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	accountImage: {
		backgroundColor: 'red',
		width: 30,
		height: 30,
		borderRadius: 50,
	},
});
