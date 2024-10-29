import { TActivity } from 'entities/activity/model/types';

import { ConvertEnumKeysToString } from 'shared/types/form';

export const enum EActivityFieldNames {
	SET_SETTINGS = 'set_settings',

	REP_COUNT = 'rep_count',
	LIFTED_WEIGHT = 'lifted_weight',
}

export type TActivityFormEditFields = Record<
	TActivity['_id'],
	ConvertEnumKeysToString<{
		[EActivityFieldNames.SET_SETTINGS]: {
			[EActivityFieldNames.LIFTED_WEIGHT]: string;
			[EActivityFieldNames.REP_COUNT]: string;
		}[];
	}>
>;
