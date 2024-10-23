import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const ArrowIcon = (props: SvgProps) => (
	<Svg width={20} height={20} viewBox="0 0 0.6 0.6" {...props}>
		<G fill="none" fillRule="evenodd">
			<Path d="M0 0h.6v.6H0V0z" />
			<Path
				stroke="#0C0310"
				strokeLinecap="round"
				strokeWidth={0.05}
				d="M.25.45.391.309a.013.013 0 0 0 0-.018L.25.15"
			/>
		</G>
	</Svg>
);
export default React.memo(ArrowIcon);
