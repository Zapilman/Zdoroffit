import { memo } from 'react';

import { useExerciseHistory } from 'entities/exercise-history';

import { Button } from 'shared/ui';

const ClearHistoryBtn = () => {
	const clearHistory = useExerciseHistory((state) => state.clearHistory);

	return <Button title="Clear History" onPress={clearHistory} />;
};

export default memo(ClearHistoryBtn);
