import { ReactNode, createRef, useCallback, useState } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { TBottomModal, TBottomModalContextType, TBottomModalPayLoad } from '../model/types';
import { BottomModalContext } from './bottom-modal-context';

let modalId = 1;

export const BottomModalProvider = ({ children }: { children: ReactNode }) => {
	const [bottomModalList, setBottomModalList] = useState<Record<TBottomModal['id'], TBottomModal>>(
		{},
	);

	const registerModal = () => modalId++;

	const showModal = useCallback<TBottomModalContextType['showModal']>(
		(newModalId) => (modalComponent) => (props) => {
			return new Promise((resolve) => {
				const modalRef = createRef<BottomSheetModal>();
				setBottomModalList((prev) => ({
					...prev,
					[newModalId]: {
						id: newModalId,
						component: modalComponent,
						props: { ...props, modalRef },
						resolve: resolve as TBottomModalPayLoad,
					},
				}));
				setTimeout(() => modalRef.current?.present(), 100);
			});
		},
		[],
	);

	const closeModal = useCallback<TBottomModalContextType['closeModal']>(
		(newModalId) => (data) => {
			if (bottomModalList[newModalId]) {
				const {
					resolve,
					props: { modalRef },
				} = bottomModalList[newModalId];
				resolve(data);
				modalRef.current?.dismiss();
			}
		},
		[bottomModalList],
	);

	const renderModal = useCallback(
		(props: TBottomModal) => {
			const Modal = props.component;

			return <Modal key={props.id} {...props.props} closeModal={closeModal(props.id)} />;
		},
		[closeModal],
	);

	return (
		<BottomModalContext.Provider value={{ showModal, closeModal, registerModal }}>
			{children}
			{Object.values(bottomModalList).map((modalProps) => renderModal(modalProps))}
		</BottomModalContext.Provider>
	);
};
