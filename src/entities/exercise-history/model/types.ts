type TActivityProgress = {
	repCount: number;
	weight: number;
	note: string;
};

export type TExerciseHistoryItem = {
	_id: string;
	exerciseId: string;
	progress: TActivityProgress[];
	dateCreated: Date;
	generalNote: string;
};
