import React from 'react';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, useAnimatedValue } from 'react-native';
import { ProgressBar, ProgressBarProps } from 'react-native-paper';

import { useAppTheme } from 'shared/lib/theme';

class ClassProgressBar extends React.Component {
	constructor(props: ProgressBarProps) {
		super(props);
	}
	render() {
		return <ProgressBar {...this.props} />;
	}
}
const AnimatedProgressBar = Animated.createAnimatedComponent(ClassProgressBar);

type TUIProgressBarProps = {
	duration?: number;
	isSuccess: boolean;
	onFinish?: () => void;
};

export const UIProgressBar = ({ duration = 4000, isSuccess, onFinish }: TUIProgressBarProps) => {
	const { theme } = useAppTheme();
	const { current: progressBarValue } = React.useRef(new Animated.Value(0));
	const runCustomAnimation = () => {
		progressBarValue.setValue(0);
		Animated.timing(progressBarValue, {
			toValue: 0.8,
			duration,
			useNativeDriver: false,
		}).start();
	};

	const finishAnimation = (onEnd?: () => void) => {
		Animated.timing(progressBarValue, {
			toValue: 1,
			duration,
			useNativeDriver: false,
		}).start(onEnd);
	};

	useEffect(() => {
		runCustomAnimation();
	}, []);

	useEffect(() => {
		if (isSuccess) {
			finishAnimation(onFinish);
		}
	}, [isSuccess]);

	return (
		<AnimatedProgressBar
			animatedValue={progressBarValue}
			theme={{ colors: { primary: theme.colors.focus, surfaceVariant: theme.colors.text } }}
			style={styles.bar}
		/>
	);
};

const styles = StyleSheet.create({
	bar: {
		width: '100%',
	},
});
