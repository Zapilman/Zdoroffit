import { StyleSheet, View } from 'react-native';
import { Divider, Switch } from 'react-native-paper';

import { PageLayout } from 'widgets/pageLayout';

import { useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

export const ThemeSettingsScreen = () => {
	const { theme, toggleTheme } = useAppTheme();

	return (
		<PageLayout>
			<View style={styles.title}>
				<Typography>Theme</Typography>
				<Switch value={theme.dark} onValueChange={toggleTheme} color={theme.colors.focus} />
			</View>
			<Divider />
			<Typography>Change app theme</Typography>
		</PageLayout>
	);
};

const styles = StyleSheet.create({
	title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
