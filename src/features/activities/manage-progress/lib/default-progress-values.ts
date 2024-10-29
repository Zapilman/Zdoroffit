import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';

export const defaultProgressFormValues: TActivityFormEditFields[1] = {
	[EActivityFieldNames.SET_SETTINGS]: [
		{
			[EActivityFieldNames.REP_COUNT]: '2',
			[EActivityFieldNames.LIFTED_WEIGHT]: '3',
		},
		{
			[EActivityFieldNames.REP_COUNT]: '',
			[EActivityFieldNames.LIFTED_WEIGHT]: '',
		},
		{
			[EActivityFieldNames.REP_COUNT]: '',
			[EActivityFieldNames.LIFTED_WEIGHT]: '',
		},
		{
			[EActivityFieldNames.REP_COUNT]: '',
			[EActivityFieldNames.LIFTED_WEIGHT]: '',
		},
	],
};
