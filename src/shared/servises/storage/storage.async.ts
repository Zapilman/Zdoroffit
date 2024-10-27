import AsyncStorage from '@react-native-async-storage/async-storage';

type TStorageImplementation = {
	setItemImpl: (key: string, value: string) => void;
	getItemImpl: (key: string) => Promise<string | null>;
	removeItemImpl: (key: string) => void;
};

export const asyncStorageImpl = (): TStorageImplementation => {
	return {
		setItemImpl: (key: string, value: string) => AsyncStorage.setItem(key, value),
		getItemImpl: (key: string) => AsyncStorage.getItem(key),
		removeItemImpl: (key: string) => AsyncStorage.removeItem(key),
	};
};
