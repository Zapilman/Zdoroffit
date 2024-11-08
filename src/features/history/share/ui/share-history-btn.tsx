import { memo, useCallback } from 'react';
import { Share } from 'react-native';

import * as Sharing from 'expo-sharing';

import { formatHistoryForExport, useExerciseHistory } from 'entities/exercise-history';

import { Button } from 'shared/ui';

const ShareHistoryBtn = () => {
	const history = useExerciseHistory((state) => state.history);

	const handlePress = useCallback(async () => {
		const shareAllowed = await Sharing.isAvailableAsync();

		if (shareAllowed) {
			const minifiedHistory = formatHistoryForExport(history);

			const shareRes = await Share.share({
				message: JSON.stringify(minifiedHistory),
			});

			console.log('shareRes', shareRes);
		}
	}, [history]);

	return <Button title="Share History" onPress={handlePress} />;
};

export default memo(ShareHistoryBtn);
