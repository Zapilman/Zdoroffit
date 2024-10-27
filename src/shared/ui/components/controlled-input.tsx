import { ComponentProps, memo } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { Input } from './Input';

type TControlledInputProps<T extends FieldValues> = {
	control: Control<T>;
	name: Path<T>;
} & ComponentProps<typeof Input>;

const ControlledInput = <T extends FieldValues>({
	control,
	name,
	inputProps,
	...otherProps
}: TControlledInputProps<T>) => {
	const { field } = useController({
		control,
		name,
	});

	return (
		<Input
			{...otherProps}
			inputProps={{ ...inputProps, value: String(field.value), onChangeText: field.onChange }}
		/>
	);
};

export default memo(ControlledInput) as typeof ControlledInput;
