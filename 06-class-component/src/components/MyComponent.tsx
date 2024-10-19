import React from 'react';

class MyComponent extends React.Component<{ name: string }> {
	constructor(props: { name: string }) {
		super(props);
		console.log('component created');
	}

	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
export default MyComponent;
