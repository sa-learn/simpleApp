import React, { useState } from 'react';
import Square from './Square';
import { View, Text } from 'react-native';

export default function Board() {
	let [board, setBoard] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);
	let [isPlayerX, setIsPlayerX] = useState(true);
	let setXorY = isX => (isX ? 'X' : 'Y');

	return (
		<View>
			<Text>Next Player: {setXorY(isPlayerX)}</Text>
			<View style={{ flexDirection: 'row' }}>
				<Square
					value={board[0]}
					onPress={() => {
						setBoard([
							setXorY(isPlayerX),
							board[1],
							board[2],
							board[3],
							board[4],
							board[5],
							board[6],
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
				<Square
					value={board[1]}
					onPress={() => {
						setBoard([
							board[0],
							setXorY(isPlayerX),
							board[2],
							board[3],
							board[4],
							board[5],
							board[6],
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
				<Square
					value={board[2]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							setXorY(isPlayerX),
							board[3],
							board[4],
							board[5],
							board[6],
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Square
					value={board[3]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							board[2],
							setXorY(isPlayerX),
							board[4],
							board[5],
							board[6],
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
				<Square
					value={board[4]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							board[2],
							board[3],
							setXorY(isPlayerX),
							board[5],
							board[6],
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
				<Square
					value={board[5]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							board[2],
							board[3],
							board[4],
							setXorY(isPlayerX),
							board[6],
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Square
					value={board[6]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							board[2],
							board[3],
							board[4],
							board[5],
							setXorY(isPlayerX),
							board[7],
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
				<Square
					value={board[7]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							board[2],
							board[3],
							board[4],
							board[5],
							board[6],
							setXorY(isPlayerX),
							board[8]
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
				<Square
					value={board[8]}
					onPress={() => {
						setBoard([
							board[0],
							board[1],
							board[2],
							board[3],
							board[4],
							board[5],
							board[6],
							board[7],
							setXorY(isPlayerX)
						]);
						setIsPlayerX(!isPlayerX);
					}}
				/>
			</View>
		</View>
	);
}
