import React, { ChangeEvent, FormEvent } from 'react';

type ContactInputProps = {
	addContact: (name: string, tag: string) => void;
};

type ContactInputState = {
	name: string;
	tag: string;
};

class ContactInput extends React.Component<
	ContactInputProps,
	ContactInputState
> {
	constructor(props: ContactInputProps) {
		super(props);

		this.state = {
			name: '',
			tag: '',
		};

		this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
		this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onNameChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
		this.setState({ name: event.target.value });
	}

	onTagChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
		this.setState({ tag: event.target.value });
	}

	// Submit event handler
	onSubmitEventHandler(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		// Call the addContact function from props
		this.props.addContact(this.state.name, this.state.tag);

		// Optionally, reset the form state
		this.setState({ name: '', tag: '' });
	}

	render(): React.ReactNode {
		return (
			<form
				action=''
				className='contact-input'
				onSubmit={this.onSubmitEventHandler}>
				<input
					type='text'
					placeholder='Nama'
					value={this.state.name}
					onChange={this.onNameChangeEventHandler}
				/>
				<input
					type='text'
					placeholder='Tag'
					value={this.state.tag}
					onChange={this.onTagChangeEventHandler}
				/>
				<button type='submit'>Tambah</button>
			</form>
		);
	}
}

export default ContactInput;
