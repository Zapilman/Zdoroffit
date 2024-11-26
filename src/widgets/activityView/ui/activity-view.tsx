import { RefObject, memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { ModalProvider } from 'entities/modal';

import { Colors } from 'shared/config';
import { TAppTheme, useAppTheme } from 'shared/lib/theme';
import { Typography } from 'shared/ui/components/Typography';

import { useActivityView } from '../lib/use-activity-view';
import { ActivityForm } from './activity-form';
import { ActivityVideo } from './activity-video';

type TActivityViewProps = {
	modalRef: RefObject<BottomSheetModal>;
	activityId: string | undefined;
	closeModal: () => void;
};

const ActivityView = ({ modalRef, activityId, closeModal }: TActivityViewProps) => {
	const { theme } = useAppTheme();
	const themeStyles = getThemeStyles(theme);

	const { exercise, closeSettingsModal } = useActivityView({
		activityId,
		closeModal,
	});
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
			<BottomSheetScrollView
				contentContainerStyle={[styles.modalContainer, themeStyles.modalContainer]}
			>
				<ModalProvider>
					<View style={styles.activityInterection}>
						{exercise?.videoUrl && <ActivityVideo videoUrl={exercise.videoUrl} />}

						<View style={styles.ph20}>
							<Typography kind="text" weight="bold" size="lg">
								{exercise?.name}
							</Typography>
						</View>

						{activityId && exercise?.id ? (
							<View style={styles.ph20}>
								<ActivityForm
									exerciseId={exercise?.id}
									activityId={activityId}
									onSave={closeSettingsModal}
								/>
							</View>
						) : null}
					</View>
				</ModalProvider>
			</BottomSheetScrollView>
		</BottomSheetModal>
	);
};

export default memo(ActivityView);

const getThemeStyles = (theme: TAppTheme) =>
	StyleSheet.create({
		modalContainer: {
			backgroundColor: theme.colors.primary,
		},
	});

const styles = StyleSheet.create({
	modalContainer: {
		minHeight: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		paddingHorizontal: 0,
		backgroundColor: Colors.PRIMARY,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		overflow: 'hidden',
	},
	activityInterection: {
		gap: 20,
	},
	ph20: {
		paddingHorizontal: 10,
		gap: 20,
	},
});
