import React, { useState } from 'react';
import './App.css';

function Counter() {
	const [count, setCount] = useState(0);

	const counterClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setCount(count + 1);
	};

	return (
		<div>
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
