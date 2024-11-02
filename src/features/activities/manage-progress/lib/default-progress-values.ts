import { EActivityFieldNames, TActivityFormEditFields } from '../model/formTypes';

export const defaultProgressFormValues: TActivityFormEditFields[1] = {
	[EActivityFieldNames.SET_SETTINGS]: [
		{
			[EActivityFieldNames.REP_COUNT]: '0',
			[EActivityFieldNames.LIFTED_WEIGHT]: '0',
		},
	],
};
