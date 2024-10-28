import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storageService } from 'shared/servises/storage';

import { TActivity } from './types';

type TActivityState = {
	activities: TActivity[];
	addActivity: (activity: TActivity) => void;
	removeActivity: (activityId: TActivity['_id']) => void;
};

export const useActivity = create<TActivityState>()(
	persist(
		(set, get) => ({
			activities: [],

			addActivity: (activity: TActivity) => set({ activities: [activity, ...get().activities] }),

			removeActivity: (activityId: TActivity['_id']) =>
				set({ activities: get().activities.filter((activity) => activity._id !== activityId) }),
		}),
		{
			name: 'activity-storage',
			storage: createJSONStorage(() => storageService),
		},
	),
);
