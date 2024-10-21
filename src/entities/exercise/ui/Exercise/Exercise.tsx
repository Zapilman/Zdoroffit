import { memo } from 'react';
import { View, Image } from 'react-native';
import { styles } from './Exercise.styles';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { Typography } from 'shared/ui';
import { BulletList } from 'shared/ui/icons';
import { Link } from 'expo-router';
import { PathRoutes } from 'core/routes';

type TExerciseCardProps = {
	image: string;
	title: string;
	subTitle?: string;
} & ViewProps;

const ExerciseCard = ({ image, title, subTitle, style, ...otherProps }: TExerciseCardProps) => {
	return (
		<View style={[styles.exercise, style]} {...otherProps}>
			<Link href={`${PathRoutes.EXERCISES}/pupa`}>
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
			<BulletList style={styles.optionIcon} />
		</View>
	);
};

export default memo(ExerciseCard);
