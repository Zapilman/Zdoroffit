import { memo, useCallback } from 'react';
import { Share } from 'react-native';

import * as Sharing from 'expo-sharing';

import { useExerciseHistory } from 'entities/exercise-history';

import { Button } from 'shared/ui';

const ShareHistoryBtn = () => {
	const history = useExerciseHistory((state) => state.history);

	const handlePress = useCallback(async () => {
		const shareAllowed = await Sharing.isAvailableAsync();

		if (shareAllowed) {
			const shareRes = await Share.share({
				message: JSON.stringify(history),
			});

			console.log('shareRes', shareRes);
		}
	}, [history]);

	return <Button title="Share History" onPress={handlePress} />;
};

export default memo(ShareHistoryBtn);
