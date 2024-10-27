export type ConvertEnumKeysToString<T> = {
	[K in keyof T as `${K & string}`]: T[K] extends (infer U)[]
		? ConvertEnumKeysToString<U>[]
		: T[K] extends object
			? ConvertEnumKeysToString<T[K]>
			: T[K];
};
