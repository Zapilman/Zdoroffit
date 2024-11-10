import { TActivity } from 'entities/activity/model/types';

export type TProgram = {
	programId: string;
	programName: string;

	activities: TActivity[];
};
