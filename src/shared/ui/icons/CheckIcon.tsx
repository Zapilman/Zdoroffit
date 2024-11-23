import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

// TODO: make universal Icon component

const CheckIcon = (props: SvgProps) => (
	<Svg width={20} height={20} viewBox="0 0 0.6 0.6" {...props}>
		<G fill="none" fillRule="evenodd">
			<Path d="M0 0h.6v.6H0V0z" />
			<Path
				stroke={props.color}
				strokeLinecap="round"
				strokeWidth={0.05}
				d="M.525.3A.225.225 0 0 1 .3.525.225.225 0 0 1 .075.3a.225.225 0 0 1 .45 0z"
			/>
			<Path
				stroke={props.color}
				strokeLinecap="round"
				strokeWidth={0.05}
				d="m.213.313.041.052a.013.013 0 0 0 .019.001L.388.25"
			/>
		</G>
	</Svg>
);
export default React.memo(CheckIcon);
