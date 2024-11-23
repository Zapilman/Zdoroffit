import { memo } from 'react';
import { Image, Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { Link } from 'expo-router';

import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';
import { CheckIcon, DotsIcon } from 'shared/ui/icons';

type TExerciseCardProps = {
	image: string;
	title: string;
	selected?: boolean;
	onSelect?: () => void;
} & ViewProps;

const ExerciseCard = ({
	image,
	title,
	selected,
	onSelect,
	style,
	...otherProps
}: TExerciseCardProps) => {
	const { theme } = useAppTheme();
	return (
		<View style={[styles.exercise, style]} {...otherProps}>
			<Link href={'asdasdas'}>
				<View style={styles.imageWrapper}>
					<Image
						source={{
							uri: image,
						}}
						style={styles.image}
					/>
					{selected && <CheckIcon style={styles.selectedIcon} color={theme.colors.focus} />}
				</View>
			</Link>
			<Pressable style={styles.exerciseInfo} onPress={onSelect}>
				<Typography weight="bold" kind={selected ? 'focus' : 'text'}>
					{title}
				</Typography>
			</Pressable>
			<DotsIcon style={styles.optionIcon} />
		</View>
	);
};

export default memo(ExerciseCard);

const styles = StyleSheet.create({
	exercise: {
		flexDirection: 'row',
		alignContent: 'center',
		columnGap: 20,
	},
	imageWrapper: {
		position: 'relative',
	},
	image: {
		width: 50,
		height: 70,
		borderRadius: 5,
	},
	selectedIcon: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		transform: [{ translateX: 10 }, { translateY: 10 }],
	},
	exerciseInfo: {
		justifyContent: 'center',
		flexGrow: 1,
	},
	optionIcon: {
		alignSelf: 'center',
		transform: [{ rotate: '90deg' }],
	},
});
