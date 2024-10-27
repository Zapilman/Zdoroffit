import { asyncStorageImpl } from './storage.async';
import { _storageService } from './storageService';

export const storageService = _storageService(asyncStorageImpl());
