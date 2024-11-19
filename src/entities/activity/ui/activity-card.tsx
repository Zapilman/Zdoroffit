import { memo } from 'react';
import { Image, Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { Typography } from 'shared/ui/components/Typography';
import { DotsIcon } from 'shared/ui/icons';

type TActivityCardProps = {
	image: string;
	title: string;
	subTitle?: string;
	onPress?: () => void;
	onOptionPress?: () => void;
} & ViewProps;

const ActivityCard = ({
	image,
	title,
	subTitle,
	style,
	onPress,
	onOptionPress,
	...otherProps
}: TActivityCardProps) => {
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
			<Pressable style={styles.activityInfo} onPress={onPress}>
				<Typography weight="bold">{title}</Typography>
				{subTitle && <Typography>{subTitle}</Typography>}
			</Pressable>
			<Pressable onPress={onOptionPress} style={styles.optionBtn}>
				<DotsIcon />
			</Pressable>
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
	optionBtn: {
		alignSelf: 'center',
		padding: 10,
		transform: [{ rotate: '90deg' }],
	},
});
