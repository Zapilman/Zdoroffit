import { memo } from 'react';
import { Image, StyleSheet, View, ViewProps } from 'react-native';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { Typography } from 'shared/ui';
import { DotsIcon } from 'shared/ui/icons';

type TActivityCardProps = {
	image: string;
	title: string;
	subTitle?: string;
} & ViewProps;

const ActivityCard = ({ image, title, subTitle, style, ...otherProps }: TActivityCardProps) => {
	return (
		<View style={[styles.activity, style]} {...otherProps}>
			<Link href={`${PathRoutes.EXERCISE}/pupa`}>
				<View>
					<Image
						source={{
							uri: image,
						}}
						style={styles.image}
					/>
				</View>
			</Link>
			<View style={styles.activityInfo}>
				<Typography weight="bold">{title}</Typography>
				{subTitle && <Typography>{subTitle}</Typography>}
			</View>
			<DotsIcon style={styles.optionIcon} />
		</View>
	);
};

export default memo(ActivityCard);

const styles = StyleSheet.create({
	activity: {
		flexDirection: 'row',
		alignContent: 'center',
		columnGap: 20,
	},
	image: {
		width: 50,
		height: 70,
		borderRadius: 5,
	},
	activityInfo: {
		justifyContent: 'center',
		flexGrow: 1,
	},
	optionIcon: {
		alignSelf: 'center',
		transform: [{ rotate: '90deg' }],
	},
});
