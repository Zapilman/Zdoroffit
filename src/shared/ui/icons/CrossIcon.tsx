import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const CrossIcon = (props: SvgProps) => (
	<Svg width={20} height={20} viewBox="0 0 0.6 0.6" {...props}>
		<G fill="none" fillRule="evenodd">
			<Path d="M0 0h.6v.6H0V0z" />
			<Path
				stroke="#0C0310"
				strokeLinecap="round"
				strokeWidth={0.05}
				d="m.425.175-.25.25M.175.175l.25.25"
			/>
		</G>
	</Svg>
);
export default React.memo(CrossIcon);
