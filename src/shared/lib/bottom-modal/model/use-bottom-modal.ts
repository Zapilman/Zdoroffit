import { FunctionComponent } from 'react';

import { useStrictContext } from 'shared/lib/react';

import { BottomModalProps } from '../model/types';
import { BottomModalContext } from '../ui/bottom-modal-context';

export const useBottomModal =
	<ResolvePayload extends Record<string, unknown>>() =>
	<Props extends BottomModalProps<ResolvePayload>>(modalComponent: FunctionComponent<Props>) => {
		const { showModal, closeModal, registerModal } = useStrictContext(
			BottomModalContext,
			'BottomModalContext',
		);

		const modalId = registerModal();

		return {
			showModal: showModal<ResolvePayload, Props>(modalId)(modalComponent),
			closeModal: closeModal<ResolvePayload>(modalId),
		};
	};
