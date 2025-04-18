import { View } from 'react-native';

import { Typography } from 'shared/ui/components/Typography';
import { UIProgressBar } from 'shared/ui/components/ui-progress-bar';

type TSyncingProcessProps = {
	onComplete: () => void;
	syncSuccess: boolean;
};

export const SyncingProcess = ({ onComplete, syncSuccess }: TSyncingProcessProps) => {
	const completeSync = () => {
		setTimeout(() => {
			onComplete();
		}, 1000);
	};

	return (
		<View>
			<Typography>Syncing...</Typography>
			<UIProgressBar duration={3000} isSuccess={syncSuccess} onFinish={completeSync} />
		</View>
	);
};
