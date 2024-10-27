import { memo, useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { ActivitiesList, useActivity } from 'entities/activity';
import { AddExercise } from 'entities/exercise';

import { ActivityView } from 'widgets/activityView';
import { PageLayout } from 'widgets/pageLayout';

import { Button } from 'shared/ui';

const ActivitiesScreen = () => {
	const activities = useActivity((state) => state.activities);

	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	const handleAdd = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);

	const handleClose = useCallback(() => {
		bottomSheetModalRef.current?.dismiss();
	}, []);

	return (
		<PageLayout>
			<AddExercise selectedExercisesCount={activities.length} />
			<ActivitiesList />
			<Button title="open" onPress={handleAdd} />
			<Button title="close" onPress={handleClose} style={{ marginTop: 40 }} />

			<ActivityView modalRef={bottomSheetModalRef} />
		</PageLayout>
	);
};

export default memo(ActivitiesScreen);
