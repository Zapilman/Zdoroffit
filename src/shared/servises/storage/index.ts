import { mmkvStorageImpl } from './storage.mmkv';
import { _storageService } from './storageService';

export const storageService = _storageService(mmkvStorageImpl());
