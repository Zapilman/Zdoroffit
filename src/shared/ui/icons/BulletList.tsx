import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const BulletListIcon = (props: SvgProps) => (
	<Svg width={20} height={20} viewBox="0 0 0.6 0.6" {...props}>
		<G fill="none" fillRule="evenodd">
			<Path d="M0 0h.6v.6H0V0z" />
			<Path
				stroke="#0C0310"
				strokeLinecap="round"
				strokeWidth={0.05}
				d="M.25.175h.225M.125.175h.003M.25.425h.225M.125.425h.003M.25.3h.225M.125.3h.003"
			/>
		</G>
	</Svg>
);
export default React.memo(BulletListIcon);
