import { StateStorage } from 'zustand/middleware';

type TStorageImplementation = {
	setItemImpl: (key: string, value: string) => void;
	getItemImpl: (key: string) => Promise<string | null>;
	removeItemImpl: (key: string) => void;
};

export const _storageService = ({
	setItemImpl,
	getItemImpl,
	removeItemImpl,
}: TStorageImplementation): StateStorage => {
	const setItem = (key: string, value: string) => {
		setItemImpl(key, value);
	};
	const getItem = (key: string) => {
		return getItemImpl(key);
	};
	const removeItem = (key: string) => {
		removeItemImpl(key);
	};

	return {
		setItem,
		getItem,
		removeItem,
	};
};
