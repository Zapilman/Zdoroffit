import { Pressable, StyleSheet } from 'react-native';

import { useMutation } from '@tanstack/react-query';

import { SessionApi, useSessionQuery } from 'entities/session';

import { TAppTheme, useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

export const ConnectionStatus = () => {
	const { theme } = useAppTheme();
	const styles = getThemeStyles(theme);

	const { data } = useSessionQuery();

	const login = useMutation({
		mutationFn: (data: { email: string; password: string }) => SessionApi.signIn(data),
	});

	return (
		<Pressable
			style={styles.status}
			onPress={() => login.mutate({ email: 'H8BtH@example.com', password: 'password#1' })}
		>
			<Typography kind="focus">{data ? 'Connected' : 'Offline'}</Typography>
		</Pressable>
	);
};

const getThemeStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		status: {
			backgroundColor: theme.colors.secondary,
			paddingHorizontal: 5,
			borderRadius: 5,
		},
	});
