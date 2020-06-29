import React from 'react';
import './App.css';
import Message from './Message';

function message(props: any) {
	return <div>{props.text}</div>;
}

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Message text="Hello world" />
				<Message text="Goodbye world" />
			</header>
		</div>
	);
};

export default App;
