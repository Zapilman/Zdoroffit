import { TExerciseHistoryItem } from '../model/types';

type TMinifiedProgress = {
	rC: number;
	w: number;
	n?: string;
};

type TMinifiedHistoryItem = {
	_id: string;
	eId: string;
	p: TMinifiedProgress[];
	dC: Date;
	gN?: string;
};

export const formatHistoryForExport = (
	history: Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>,
): TMinifiedHistoryItem[] => {
	return Object.values(history).map((item) => {
		return {
			_id: item._id,
			eId: item.exerciseId,
			p: item.progress.map((progress) => ({
				rC: progress.repCount,
				w: progress.weight,
				n: progress.note,
			})),
			dC: item.dateCreated,
			gN: item.generalNote,
		};
	});
};

export const formatHistoryForImport = (
	minifiedHistory: TMinifiedHistoryItem[],
): Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem> => {
	return minifiedHistory.reduce(
		(acc, item) => {
			acc[item._id] = {
				_id: item._id,
				exerciseId: item.eId,
				progress: item.p.map((progress) => ({
					repCount: progress.rC,
					weight: progress.w,
					note: progress.n,
				})),
				dateCreated: item.dC,
				generalNote: item.gN,
			} as TExerciseHistoryItem;
			return acc;
		},
		{} as Record<TExerciseHistoryItem['_id'], TExerciseHistoryItem>,
	);
};

export const validateHistory = (history: unknown[]): history is TMinifiedHistoryItem[] => {
	return history.every((item) => {
		return (
			typeof item === 'object' &&
			item !== null &&
			'eId' in item &&
			'p' in item &&
			'dC' in item &&
			'gN' in item
		);
	});
};
