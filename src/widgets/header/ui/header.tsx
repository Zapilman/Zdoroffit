import { ComponentProps, memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography } from 'shared/ui/components/Typography';

import { HeaderOptionButton } from './option-button';

type THeaderProps = ComponentProps<typeof HeaderOptionButton>;

const Header = ({ onOptionPress }: THeaderProps) => {
	return (
		<View style={styles.header}>
			<Typography size="lg" weight="bold">
				Zdoroffit
			</Typography>
			<HeaderOptionButton onOptionPress={onOptionPress} />
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
