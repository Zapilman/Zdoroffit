import { RefObject, createContext, useContext } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

type TSettingsContext = {
	settingsModalRef: RefObject<BottomSheet>;
};

export const SettingsContext = createContext<TSettingsContext | null>(null);

export const useSettingsContext = () => {
	const context = useContext(SettingsContext);

	if (!context) {
		throw new Error('there is no context');
	}

	return context;
};
