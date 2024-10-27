import { RefObject, memo, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dimensions, StyleSheet } from 'react-native';

import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useShallow } from 'zustand/react/shallow';

import { useActivity } from 'entities/activity';

import { Colors } from 'shared/config';
import { Button, Typography } from 'shared/ui';

import { TActivityFormEditFields } from '../model/formTypes';
import { ActivityForm } from './activity-form';
import { ActivitySettings } from './activity-settings';
import { SettingsContext } from './settings-context';

type TActivityViewProps = {
	modalRef: RefObject<BottomSheetModal>;
	activityId: string;
};

const ActivityView = ({ modalRef, activityId }: TActivityViewProps) => {
	const activity = useActivity(
		useShallow((state) => state.activities.find((activity) => activity._id === activityId)),
	);
	const methods = useForm<TActivityFormEditFields>();

	const handleSave = (data: TActivityFormEditFields) => {
		console.log(data);
	};

	const settingsRef = useRef<BottomSheet>(null);

	useEffect(() => {
		if (!activity) {
			modalRef.current?.dismiss();
		}
	}, [activity]);

	return (
		<BottomSheetModal
			ref={modalRef}
			// onChange={handleSheetChanges}
			enableOverDrag={false}
			// backgroundComponent={null}
			handleComponent={null}
			enablePanDownToClose
			enableDismissOnClose
		>
			<BottomSheetView style={styles.modalContainer}>
				<SettingsContext.Provider value={{ settingsModalRef: settingsRef }}>
					<FormProvider {...methods}>
						<Typography>{activity?.exerciseName}</Typography>
						<ActivityForm />
						<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
					</FormProvider>
				</SettingsContext.Provider>

				<ActivitySettings modalRef={settingsRef} />
			</BottomSheetView>
		</BottomSheetModal>
	);
};

export default memo(ActivityView);

const styles = StyleSheet.create({
	modalContainer: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		backgroundColor: Colors.PRIMARY,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
});
