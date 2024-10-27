import { ConvertEnumKeysToString } from 'shared/types/form';

export const enum EActivityFieldNames {
	SET_SETTINGS = 'set_settings',

	SET_COUNT = 'set_count',
	REP_COUNT = 'rep_count',
}

export type TActivityFormEditFields = ConvertEnumKeysToString<{
	[EActivityFieldNames.SET_SETTINGS]: {
		[EActivityFieldNames.SET_COUNT]: number;
		[EActivityFieldNames.REP_COUNT]: number;
	}[];
}>;
