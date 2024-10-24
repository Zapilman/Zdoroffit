import { memo } from 'react';
import { Image, View } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { Typography } from 'shared/ui';
import { DotsIcon } from 'shared/ui/icons';

import { styles } from './Exercise.styles';

type TExerciseCardProps = {
	image: string;
	title: string;
	subTitle?: string;
} & ViewProps;

const ExerciseCard = ({ image, title, subTitle, style, ...otherProps }: TExerciseCardProps) => {
	return (
		<View style={[styles.exercise, style]} {...otherProps}>
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
			<View style={styles.exerciseInfo}>
				<Typography weight="bold">{title}</Typography>
				{subTitle && <Typography>{subTitle}</Typography>}
			</View>
			<DotsIcon style={styles.optionIcon} />
		</View>
	);
};

export default memo(ExerciseCard);
