import { useCallback } from 'react';

import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';

import { ActivityView } from 'widgets/activityView';

import { useBottomModal } from 'shared/lib/bottom-modal';

import { ActivitiesOptionsModal } from '../ui/activities-option-modal';
import { ActivityOptionsModal } from '../ui/activity-options-modal';

export const useActivitiesScreen = () => {
	const [activities, removeActivity] = useActivity(
		useShallow((state) => [state.activities, state.removeActivity]),
	);

	const optionBottomModal = useBottomModal()(ActivityOptionsModal);
	const activityViewBottomModal = useBottomModal()(ActivityView);
	const activitiesOptionsModal = useBottomModal()(ActivitiesOptionsModal);

	const showActivityView = (activityId: string) => async () => {
		await activityViewBottomModal.showModal({ activityId });
	};

	const handleOptionPress = (activityId: string) => async () => {
		await optionBottomModal.showModal({ onRemove: () => removeActivity(activityId) });
	};

	const handleActivitiesOptionsPress = useCallback(async () => {
		await activitiesOptionsModal.showModal({});
	}, []);

	return {
		activities,
		showActivityView,
		handleOptionPress,
		handleActivitiesOptionsPress,
	};
};
