import React from 'react';
import { Button } from 'react-native-elements';

export default function Square({ value, onPress }) {
	return (
		<Button
			title={value ? String(value) : '   '}
			onPress={() => {
				onPress();
				console.log(`value adalah ${value}`);
			}}
		/>
	);
}
