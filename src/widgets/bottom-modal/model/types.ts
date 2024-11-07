import { ElementType, FunctionComponent, RefObject } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

export type TBottomModalPayLoad<
	ResolvePayload extends Record<string, unknown> = Record<string, unknown>,
> = (value: ResolvePayload | null) => void;

export type BottomModalProps<ResolvePayload extends Record<string, unknown>> = {
	closeModal: TBottomModalPayLoad<ResolvePayload>;
	modalRef: RefObject<BottomSheetModal>;
};

export type TBottomModal = {
	id: number;
	component: ElementType;
	props: { modalRef: RefObject<BottomSheetModal> };
	resolve: TBottomModalPayLoad;
};

export type TBottomModalContextType = {
	showModal<
		ResolvePayload extends Record<string, unknown>,
		Props extends BottomModalProps<ResolvePayload>,
	>(
		modalId: number,
	): (
		modalComponent: FunctionComponent<Props>,
	) => (props: Omit<Props, 'closeModal' | 'modalRef'>) => Promise<ResolvePayload | null>;
	closeModal<ResolvePayload extends Record<string, unknown>>(
		modalId: number,
	): (data: null | ResolvePayload) => void;
	registerModal(): TBottomModal['id'];
};
