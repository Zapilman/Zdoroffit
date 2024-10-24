import { create } from 'zustand';

import { TActivity } from './types';

type TActivityState = {
	activities: TActivity[];
	addActivity: (activity: TActivity) => void;
};

export const useActivity = create<TActivityState>()((set, get) => ({
	activities: [],

	addActivity: (activity: TActivity) => set({ activities: [...get().activities, activity] }),
}));
