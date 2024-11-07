import { createContext } from 'react';

import { useStrictContext } from 'shared/lib/react';

type TModalContext = {
	onClose: () => void;
};

export const modalContext = createContext<TModalContext | null>(null);

export const useModalContext = () => useStrictContext(modalContext, 'modalContext');
