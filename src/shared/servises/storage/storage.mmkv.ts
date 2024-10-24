import { MMKV } from 'react-native-mmkv';

type TStorageImplementation = {
	setItemImpl: (key: string, value: string) => void;
	getItemImpl: (key: string) => string | undefined;
	removeItemImpl: (key: string) => void;
};

const storage = new MMKV({
	id: 'zdoroffit-storage',
	encryptionKey: 'some encription key',
});

export const mmkvStorageImpl = (): TStorageImplementation => {
	return {
		setItemImpl: (key: string, value: string) => storage.set(key, value),
		getItemImpl: (key: string) => storage.getString(key),
		removeItemImpl: (key: string) => storage.delete(key),
	};
};
