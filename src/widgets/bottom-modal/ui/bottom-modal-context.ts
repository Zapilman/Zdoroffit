import { createContext } from 'react';

import { TBottomModalContextType } from '../model/types';

export const BottomModalContext = createContext<TBottomModalContextType | null>(null);
