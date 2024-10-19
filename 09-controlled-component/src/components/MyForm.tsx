import React, { ChangeEvent, FormEvent } from 'react';

// Define the state interface
type MyFormState = {
	name: string;
	email: string;
	gender: string;
};

class MyForm extends React.Component<object, MyFormState> {
	constructor(props: object) {
		super(props);

		// Initialize the state
		this.state = {
			name: '',
			email: '',
			gender: 'Man',
		};

		// Bind the event handlers to 'this'
		this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
		this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
		this.onGenderChangeEventHandler =
			this.onGenderChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	// Event handler for name input
	onNameChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
		this.setState({ name: event.target.value });
	}

	// Event handler for email input
	onEmailChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
		this.setState({ email: event.target.value });
	}

	// Event handler for gender select
	onGenderChangeEventHandler(event: ChangeEvent<HTMLSelectElement>) {
		this.setState({ gender: event.target.value });
	}

	// Event handler for form submission
	onSubmitEventHandler(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;

		alert(message);
	}

	render(): React.ReactNode {
		return (
			<div className=''>
				<h1>Register Form</h1>
				<form onSubmit={this.onSubmitEventHandler}>
					<label htmlFor='name'>Name: </label>
					<input
						type='text'
						id='name'
						value={this.state.name}
						onChange={this.onNameChangeEventHandler}
					/>
					<br />
					<label htmlFor='email'>Email: </label>
					<input
						type='text'
						id='email'
						value={this.state.email}
						onChange={this.onEmailChangeEventHandler}
					/>
					<br />
					<label htmlFor='gender'>Gender: </label>
					<select
						id='gender'
						value={this.state.gender}
						onChange={this.onGenderChangeEventHandler}>
						<option value='Man'>Man</option>
						<option value='Woman'>Woman</option>
					</select>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default MyForm;
