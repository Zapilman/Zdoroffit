import { TActivity } from 'entities/activity/model/types';

import { ConvertEnumKeysToString } from 'shared/types/form';

export const enum EActivityFieldNames {
	GENERAL_NOTES = 'general_notes',
	GENERAL_NOTE = 'general_note',

	SET_SETTINGS = 'set_settings',
	REP_COUNT = 'rep_count',
	LIFTED_WEIGHT = 'lifted_weight',
	SET_NOTES = 'set_notes',
	SET_NOTE = 'set_note',
}

export type TActivityFormEditFields = Record<
	TActivity['_id'],
	ConvertEnumKeysToString<{
		[EActivityFieldNames.GENERAL_NOTES]?: {
			[EActivityFieldNames.GENERAL_NOTE]?: string;
		}[];
		[EActivityFieldNames.SET_SETTINGS]: {
			[EActivityFieldNames.LIFTED_WEIGHT]: string;
			[EActivityFieldNames.REP_COUNT]: string;
			[EActivityFieldNames.SET_NOTES]?: {
				[EActivityFieldNames.SET_NOTE]?: string;
			}[];
		}[];
	}>
>;
