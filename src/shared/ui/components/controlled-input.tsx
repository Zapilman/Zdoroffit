import { ComponentProps } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { typedMemo } from 'shared/types/react';

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

	// return (
	// 	<TextInput
	// 		{...otherProps}
	// 		label="Email"
	// 		value={String(field.value)}
	// 		onChangeText={field.onChange}
	// 	/>
	// );

	return (
		<Input
			{...otherProps}
			inputProps={{ ...inputProps, value: String(field.value), onChangeText: field.onChange }}
		/>
	);
};

export default typedMemo(ControlledInput);
