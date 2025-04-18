type TProgressItem = {
	note?: string;
	weight: number;
	reps: number;
};

type TActivityItem = {
	progress: TProgressItem[];

	exerciseSlug: string;

	note?: string;
};

export type TApiProgressSync = {
	activities?: TActivityItem[];
};
