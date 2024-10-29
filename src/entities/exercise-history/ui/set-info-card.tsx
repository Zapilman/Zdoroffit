import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography } from 'shared/ui';

type TSetInfoCardProps = {
	repsCount: number;
	liftedWeight: number;
};

export const SetInfoCard = memo(({ repsCount, liftedWeight }: TSetInfoCardProps) => {
	return (
		<View style={styles.card}>
			<Typography>
				{repsCount} x {liftedWeight} kg
			</Typography>
		</View>
	);
});

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
	},
});
