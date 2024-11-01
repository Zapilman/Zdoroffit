// const useExerciseModal = useModal<{note: string}>(ExerciseModal)
import { FunctionComponent } from 'react';

import { useStrictContext } from 'shared/lib/react';

import { ModalProps } from '../model/types';
import { ModalContext } from '../ui/modal-context';

export const useModal =
	<ResolvePayload extends Record<string, unknown>>() =>
	<Props extends ModalProps<ResolvePayload>>(modalComponent: FunctionComponent<Props>) => {
		const { showModal, closeModal } = useStrictContext(ModalContext);

		return {
			showModal: showModal<ResolvePayload, Props>(modalComponent),
			closeModal,
		};
	};
