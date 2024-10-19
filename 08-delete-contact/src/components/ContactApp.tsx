import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import { ContactItemProps } from '../utils/PropsTypes';

// Define the state interface
type ContactItemState = {
	contacts: ContactItemProps[];
};

class ContactApp extends React.Component<object, ContactItemState> {
	constructor(props: object) {
		super(props);
		this.state = {
			contacts: getData().map((contact) => ({
				...contact,
				onDelete: this.onDeleteHandler,
			})),
		};

		// Bind the onDeleteHandler to this context
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
	}

	// Delete handler for removing a contact
	onDeleteHandler(id: number) {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((contact) => contact.id !== id),
		}));
	}

	render(): React.ReactNode {
		return (
			<div className='contact-app'>
				<h1>Daftar Kontak</h1>
				<ContactList
					contacts={this.state.contacts.map((contact) => ({
						...contact,
						onDelete: this.onDeleteHandler,
					}))}
					onDelete={this.onDeleteHandler}
				/>
			</div>
		);
	}
}

export default ContactApp;
