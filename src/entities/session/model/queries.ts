import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { SessionApi } from './session.api';

const sessionKey = ['session'];

export const useSessionQuery = () => {
	return useQuery({
		queryKey: sessionKey,
		queryFn: SessionApi.getSession,
		retry: 0,
		staleTime: 5 * 60 * 1000,
	});
};

export const useSignOut = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => SessionApi.signOut(),
		async onSuccess() {
			await queryClient.invalidateQueries({ queryKey: sessionKey });
			await queryClient.removeQueries();
		},
	});
};
