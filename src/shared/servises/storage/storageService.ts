type TStorageImplementation = {
	setItemImpl: (key: string, value: string) => void;
	getItemImpl: (key: string) => string | undefined;
	removeItemImpl: (key: string) => void;
};

export const _storageService = ({
	setItemImpl,
	getItemImpl,
	removeItemImpl,
}: TStorageImplementation) => {
	const setItem = (key: string, value: string) => {
		setItemImpl(key, value);
	};
	const getItem = (key: string) => {
		getItemImpl(key);
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
