import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ObstructionFinder from '../Components/obstructionFinder.js';

const socket = io();
console.log(socket);

const Diversion = () => {

	const [isConnected, setIsConnected] = useState(socket.connected);
	const [diversionActive, setDiversionActive] = useState(false);
	const [obstructionPlanNumber, setObstructionPlanNumber] = useState();
	const [testMode, setTestMode] = useState(false);

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
			console.log(`connected: ${isConnected}`);
		});
		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
		};
	}, []);

	// doesn't work.. always?
	socket.on('sNumUsersOnline', num => {
		console.log(`${num} users are online`);
	});

	// works
	socket.on('sAckTest', str => {
		console.log(str);
	});

	let userAlan = '';

	socket.on('sAuthAlan', str => {
		userAlan = str;
	});

//temp if/else
	if(userAlan === 'ok') {
	return (
		<>
			<button
				onClick={() => {
					const eventStartTime = Date.now();
					socket.emit('cStartEvent', eventStartTime)} } >START</button>
			<ObstructionFinder
				diversionActive={diversionActive}
				setDiversionActive={setDiversionActive} />

			<button onClick={() => socket.emit('cTestSend', {user: 'me', test: 'yes a test'})}>Test button</button>
			<button
				onClick={() => {
					const pass = prompt('Enter password:');
					socket.emit('cIsAlan', pass)} } >Testing mode</button>
		</>
	);
} else {

	return (

		<div id='diversion-holding-page'>
			<h2>Diversion App - Coming Soon</h2>
			<a href='https://ats-simulation.neocities.org/obstructionFinder.html'>Old Obstruction Finder</a>
			<button
				onClick={() => {
					const pass = prompt('Enter password:');
					socket.emit('cIsAlan', pass)} } >Testing mode</button>
					// test / off
		</div>

	);
}

};


export default Diversion;
