import { Pressable } from 'react-native';

import { DotsIcon } from 'shared/ui/icons';

type THeaderOptionButtonProps = {
	onOptionPress: () => void;
};

export const HeaderOptionButton = ({ onOptionPress }: THeaderOptionButtonProps) => {
	return (
		<Pressable onPress={onOptionPress}>
			<DotsIcon />
		</Pressable>
	);
};
