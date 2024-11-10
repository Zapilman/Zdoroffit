import { memo, useCallback } from 'react';

import { TActivity } from 'entities/activity/model/types';
import { useModal } from 'entities/modal';

import { Button } from 'shared/ui';

import { useProgram } from '../model/program.store';
import { SaveProgramModal } from './save-program-modal';

type TSaveProgramBtnProps = {
	onSuccess: () => void;
	activities: TActivity[];
};

const SaveProgramBtn = ({ onSuccess, activities }: TSaveProgramBtnProps) => {
	const saveProgram = useProgram((state) => state.saveProgram);

	const modalNameModal = useModal<{ name: string }>()(SaveProgramModal);

	const handleSaveProgram = useCallback(async () => {
		const modalRes = await modalNameModal.showModal({});

		if (modalRes?.name) {
			saveProgram({
				programId: (Math.random() + 1).toString(36).substring(7),
				programName: modalRes.name,
				activities,
			});
			onSuccess();
		}
	}, [saveProgram, activities]);

	return <Button title="Save Program" onPress={handleSaveProgram} />;
};

export default memo(SaveProgramBtn);
