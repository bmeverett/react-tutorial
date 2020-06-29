import React from 'react';

interface IMessage {
	text: string;
}

export default function Message(props: IMessage) {
	return <div>{props.text}</div>;
}
