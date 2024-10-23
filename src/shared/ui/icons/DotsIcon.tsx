import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const DotsIcon = (props: SvgProps) => (
	<Svg width={20} height={20} viewBox="0 0 0.6 0.6" {...props}>
		<G fill="none" fillRule="evenodd">
			<Path d="M0 0h.6v.6H0V0z" />
			<Path
				stroke="#030819"
				strokeDasharray="0,0"
				strokeLinecap="round"
				strokeWidth={0.05}
				d="M.3.15A.025.025 0 1 0 .3.1a.025.025 0 0 0 0 .05ZM.3.325a.025.025 0 1 0 0-.05.025.025 0 0 0 0 .05ZM.3.5a.025.025 0 1 0 0-.05.025.025 0 0 0 0 .05Z"
			/>
		</G>
	</Svg>
);
export default React.memo(DotsIcon);
