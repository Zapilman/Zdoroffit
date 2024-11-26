type TActivityProgress = {
	repCount: number;
	weight: number;
	note?: string;
};

export type TExerciseHistoryItem = {
	_id: string;
	exerciseId: string;
	progress: TActivityProgress[];
	dateCreated: Date;
	generalNote?: string;
};

export class HistoryValidationErrorNotObject extends Error {}
export class HistoryValidationErrorInvalidFormat extends Error {}
export class HistoryValidationErrorNotExist extends Error {}
