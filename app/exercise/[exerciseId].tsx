import { memo, useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneMap, TabView } from 'react-native-tab-view';

import { Typography } from 'shared/ui/components/Typography';

type TFirstRouteProps = {
	onLayout: (height: number) => void;
};
const FirstRoute = memo(({ onLayout }: TFirstRouteProps) => (
	<View
		style={{ backgroundColor: '#ff4081' }}
		onLayout={({ nativeEvent }) => {
			onLayout(nativeEvent.layout.height);
		}}
	>
		<Typography>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laudantium illo, odio
			consequatur, debitis enim nulla at eveniet temporibus quia deleniti amet facere perspiciatis
			similique soluta tempora magnam earum repellat!
		</Typography>
	</View>
));

const SecondRoute = ({ onLayout }: TFirstRouteProps) => (
	<View
		style={{ backgroundColor: '#673ab7' }}
		onLayout={({ nativeEvent }) => {
			onLayout(nativeEvent.layout.height);
		}}
	>
		<Typography>asdasdsd</Typography>
	</View>
);

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
});

let mounted = false;

type HeightType = string | number;

export default () => {
	const [index, setIndex] = useState(0);
	const [height, setHeight] = useState<HeightType>('auto');
	const [tab0Height, setTab0Height] = useState<HeightType>('auto');
	const [tab1Height, setTab1Height] = useState<HeightType>('auto');
	const [tab2Height, setTab2Height] = useState<HeightType>('auto');
	const [tab3Height, setTab3Height] = useState<HeightType>('auto');

	useEffect(() => {
		if (!mounted) {
			setCurrentTabHeight(tab0Height);
			mounted = true;
		}
	});

	const [routes] = useState([
		{ key: 'tab0', title: 'Tab 0' },
		{ key: 'tab1', title: 'Tab 1' },
		{ key: 'tab2', title: 'Tab 2' },
		{ key: 'tab3', title: 'Tab 3' },
	]);

	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'tab0':
				return (
					<FirstRoute
						onLayout={(h: number) => {
							console.log('h', h);

							setTab0Height(h);
						}}
					/>
				);
			case 'tab1':
				return <SecondRoute onLayout={(h: number) => setTab1Height(h)} />;
			case 'tab2':
				return <FirstRoute onLayout={(h: number) => setTab2Height(h)} />;
			case 'tab3':
				return <FirstRoute onLayout={(h: number) => setTab3Height(h)} />;
		}
	};

	const setCurrentTabHeight = (newHeight: HeightType) => {
		const deviceHeight = Dimensions.get('window').height;
		const tabHeight = newHeight !== 'auto' && newHeight < deviceHeight ? deviceHeight : newHeight;
		if (height !== tabHeight) {
			setHeight(tabHeight);
		}
	};

	const _onTabChange = (index) => {
		switch (index) {
			case 0:
				setCurrentTabHeight(tab0Height);
				break;
			case 1:
				setCurrentTabHeight(tab1Height);
				break;
			case 2:
				setCurrentTabHeight(tab2Height);
				break;
			case 3:
				setCurrentTabHeight(tab3Height);
				break;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TabView
				style={{ height }}
				sceneContainerStyle={{ height }}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={(index) => {
					setIndex(index);
					_onTabChange(index);
				}}
				initialLayout={{ width: Dimensions.get('window').width }}
			/>
		</SafeAreaView>
	);
};
