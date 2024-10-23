import { memo } from 'react';
import { Image, Pressable, View } from 'react-native';

import { PathRoutes } from 'core/routes';
import { Link } from 'expo-router';

import { Typography } from 'shared/ui';
import { ArrowIcon } from 'shared/ui/icons';

import { styles } from './MuscleGroupCard.styles';

type TMuscleGroupCardProps = {
	muscleName: string;
	imageUrl: string;
};

const MuscleGroupCard = ({ muscleName, imageUrl }: TMuscleGroupCardProps) => {
	return (
		<Link href={`${PathRoutes.EXERCISES_BY_MUSCLE}/${muscleName}`} asChild>
			<Pressable style={styles.card}>
				<Image
					source={{
						uri: imageUrl,
					}}
					style={styles.cardImage}
					// style={styles.image}
				/>
				<View style={styles.cardInfo}>
					<Typography>{muscleName}</Typography>
				</View>
				<ArrowIcon />
			</Pressable>
		</Link>
	);
};

export default memo(MuscleGroupCard);
