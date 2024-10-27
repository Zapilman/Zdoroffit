import { RefObject, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dimensions, StyleSheet } from 'react-native';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import { Colors } from 'shared/config';
import { Button, Typography } from 'shared/ui';

import { TActivityFormEditFields } from '../model/formTypes';
import { ActivityForm } from './activity-form';

type TActivityViewProps = {
	modalRef: RefObject<BottomSheetModal>;
};

const ActivityView = ({ modalRef }: TActivityViewProps) => {
	const methods = useForm<TActivityFormEditFields>();

	const handleSave = (data: TActivityFormEditFields) => {
		console.log(data);
	};

	return (
		<BottomSheetModal
			ref={modalRef}
			// onChange={handleSheetChanges}
			enableOverDrag={false}
			// backgroundComponent={null}
			handleComponent={null}
		>
			<BottomSheetView style={styles.modalContainer}>
				<FormProvider {...methods}>
					<Typography>ActivityView</Typography>
					<ActivityForm />
					<Button title="Save" onPress={methods.handleSubmit(handleSave)} />
				</FormProvider>
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
