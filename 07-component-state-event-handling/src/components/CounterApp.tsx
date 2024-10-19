import React from 'react';

export type CounterState = {
	count: number;
};

export const CounterDisplay = (props: { count: number }) => {
	if (props.count === 0) {
		return <p>{props.count}</p>;
	}

	if (props.count % 5 === 0 && props.count % 7 === 0) {
		return <p>FizzBuzz</p>;
	}

	if (props.count % 5 === 0) {
		return <p>Fizz</p>;
	}

	if (props.count % 7 === 0) {
		return <p>Buzz</p>;
	}

	return <div className=''>{props.count}</div>;
};

export const IncreaseButton = (props: { onClick: () => void }) => {
	return (
		<button className='' onClick={props.onClick}>
			+ Increase
		</button>
	);
};

export const ResetButton = (props: { onClick: () => void }) => {
	return (
		<button className='' onClick={props.onClick}>
			Reset
		</button>
	);
};

export class CounterApp extends React.Component<
	{ count: number },
	CounterState
> {
	constructor(props: { count: number }) {
		super(props);

		this.state = {
			count: 0,
		};

		// Bind the event handlers to the class instance
		this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
		this.onResetEventHandler = this.onResetEventHandler.bind(this);
	}

	onIncreaseEventHandler() {
		this.setState((previousState) => {
			return {
				count: previousState.count + 1,
			};
		});
	}
	onResetEventHandler() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	}

	render(): React.ReactNode {
		return (
			<div className=''>
				<IncreaseButton
					onClick={() => this.onIncreaseEventHandler()}></IncreaseButton>
				<CounterDisplay count={this.state.count}></CounterDisplay>
				<ResetButton onClick={() => this.onResetEventHandler()}></ResetButton>
			</div>
		);
	}
}
export default CounterApp;
