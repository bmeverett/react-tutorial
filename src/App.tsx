import React, { useState } from 'react';
import './App.css';

type ThemeState = {
	color: string;
};

const ThemeContext = React.createContext<ThemeState | null>(null);

function Counter() {
	const [count, setCount] = useState(0);
	const { color } = React.useContext(ThemeContext)!;

	const counterClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setCount(count + 1);
	};

	return (
		<div style={{ color: color }}>
			<label>The count is {count}</label>
			<br />
			<button onClick={counterClick}>Count</button>
		</div>
	);
}

function Child2() {
	const { color } = React.useContext(ThemeContext)!;
	return <div style={{ color: color }}>Child2</div>;
}

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<ThemeContext.Provider value={{ color: 'blue' }}>
					<Counter />
					<Child2 />
				</ThemeContext.Provider>
			</header>
		</div>
	);
};

export default App;
