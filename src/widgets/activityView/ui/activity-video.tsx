import { useRef } from 'react';
import { StyleSheet } from 'react-native';

import { ResizeMode, Video } from 'expo-av';

import { typedMemo } from 'shared/types/react';

type TActivityVideoProps = {
	videoUrl: string;
};

export const ActivityVideo = typedMemo(({ videoUrl }: TActivityVideoProps) => {
	const video = useRef<Video>(null);

	const handlePlay = () => {
		video.current?.playAsync();
	};

	return (
		<Video
			ref={video}
			style={styles.video}
			source={{
				uri: videoUrl,
			}}
			resizeMode={ResizeMode.COVER}
			isLooping
			onLoad={handlePlay}
		/>
	);
});

const styles = StyleSheet.create({
	video: {
		paddingHorizontal: 0,
		width: '100%',
		height: 250,
	},
});
