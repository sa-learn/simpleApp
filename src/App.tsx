import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './Board';

export default function App() {
	const [] = useState(0);

	return (
		<View style={styles.container}>
			<Board />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
