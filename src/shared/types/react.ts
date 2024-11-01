import { ComponentPropsWithoutRef, ElementType, memo } from 'react';

export const typedMemo: <Component extends ElementType>(
	component: Component,
	compare?: (
		prevProps: ComponentPropsWithoutRef<Component>,
		nextProps: ComponentPropsWithoutRef<Component>,
	) => boolean,
) => Component = memo;
