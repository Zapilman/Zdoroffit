import { createContext } from 'react';

import { TModalContextType } from '../model/types';

export const ModalContext = createContext<TModalContextType | null>(null);
