import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
	const [name, setName] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('useEffect called');
		document.title = name;
	});

	const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.currentTarget.value);
	};

	const counterClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setCount(count + 1);
	};

	return (
		<div>
			<label>What is your name</label>
			<br />
			<input onChange={nameChange} />
			<br />
			<label>The count is {count}</label>
			<br />
			<button onClick={counterClick}>Count</button>
		</div>
	);
}

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Counter />
			</header>
		</div>
	);
};

export default App;
