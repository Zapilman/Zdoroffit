import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography } from 'shared/ui/components/Typography';

type TSetInfoCardProps = {
	repsCount: number;
	liftedWeight: number;
	note?: string;
};

export const SetInfoCard = memo(({ repsCount, liftedWeight, note }: TSetInfoCardProps) => {
	return (
		<View style={styles.card}>
			<Typography>
				{repsCount} x {liftedWeight} kg
			</Typography>
			{note && <Typography>note: {note}</Typography>}
		</View>
	);
});

const styles = StyleSheet.create({
	card: {
		flexDirection: 'column',
	},
});
