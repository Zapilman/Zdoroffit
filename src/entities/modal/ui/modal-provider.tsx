import { ReactNode, useCallback, useRef, useState } from 'react';

import { Portal } from '@gorhom/portal';

import { TModal, TModalContextType, TModalPayLoad } from '../model/types';
import { ModalContext } from './modal-context';

let modalId = 1;

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalProps, setModalProps] = useState<TModal | null>(null);
	const awaitingPromiseRef = useRef<TModalPayLoad | null>(null);

	const showModal = useCallback<TModalContextType['showModal']>(
		(modalComponent) => (props) => {
			return new Promise((resolve) => {
				awaitingPromiseRef.current?.(null);
				awaitingPromiseRef.current = resolve as TModalPayLoad;
				setModalProps({
					component: modalComponent,
					props,
					id: modalId++,
				});
			});
		},
		[],
	);

	const closeModal = useCallback<TModalContextType['closeModal']>((data) => {
		awaitingPromiseRef.current?.(data || null);
		setModalProps(null);
	}, []);

	const renderModal = useCallback((props: TModal) => {
		const Modal = props.component;

		return <Modal {...props.props} closeModal={closeModal} />;
	}, []);

	return (
		<ModalContext.Provider value={{ showModal, closeModal }}>
			{children}
			{modalProps && <Portal>{renderModal(modalProps)}</Portal>}
		</ModalContext.Provider>
	);
};
