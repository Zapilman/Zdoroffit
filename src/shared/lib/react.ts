import { Context, useContext } from 'react';

export const useStrictContext = <T extends Record<string, unknown>>(
	context: Context<T | null>,
): T => {
	const strictContext = useContext(context);

	if (!strictContext) {
		throw new Error('There is no provided context');
	}

	return strictContext;
};
