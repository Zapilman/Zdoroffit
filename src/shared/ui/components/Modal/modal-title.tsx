import { ReactNode } from 'react';
import { View } from 'react-native';

import { typedMemo } from 'shared/types/react';

type TModalTitleProps = {
	children: ReactNode;
};

export const ModalTitle = typedMemo(({ children }: TModalTitleProps) => {
	return <View>{children}</View>;
});
