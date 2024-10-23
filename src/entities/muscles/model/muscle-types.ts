export enum EMuscleName {
	ABS = 'Abs',
	BACK = 'Back',
	BICEPS = 'Biceps',
}

export type TMuscleGroup = {
	name: EMuscleName;
	imageUrl: string;
};
