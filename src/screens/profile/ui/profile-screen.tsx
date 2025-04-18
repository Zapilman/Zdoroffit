import { memo } from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { PageLayout } from 'widgets/pageLayout';

import { useProfileSettings } from '../model/use-profile-settings';
import { ListOption } from './list-option';

const ProfileScreen = () => {
	const profileSettings = useProfileSettings();

	return (
		<PageLayout>
			<FlatList
				data={profileSettings}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<>
						<ListOption {...item} />
						<Divider />
					</>
				)}
			/>
		</PageLayout>
	);
};

export default memo(ProfileScreen);
