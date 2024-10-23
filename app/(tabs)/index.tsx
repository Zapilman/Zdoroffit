import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Close up App.tsx to start working on your app!</Text>
			</View>
			<Link href={'/workout'}>
				<Text>to work</Text>
			</Link>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
