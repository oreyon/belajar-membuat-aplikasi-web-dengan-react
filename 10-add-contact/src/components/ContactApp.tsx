import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import { ContactItemProps } from '../utils/PropsTypes';
import ContactInput from './ContactInput';

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
		this.onAddContactHandler = this.onAddContactHandler.bind(this);
	}

	// Delete handler for removing a contact
	onDeleteHandler(id: number) {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((contact) => contact.id !== id),
		}));
	}

	// Add contact handler
	onAddContactHandler(name: string, tag: string) {
		this.setState((prevState) => {
			const newContact: ContactItemProps = {
				id: +new Date(),
				name,
				tag,
				imageUrl: '/images/default.jpg',
				onDelete: this.onDeleteHandler, // Include the onDelete handler
			};

			return {
				contacts: [...prevState.contacts, newContact],
			};
		});
	}

	render(): React.ReactNode {
		return (
			<div className='contact-app'>
				<h1>Aplikasi Kontak</h1>
				<h2>Tambah Kontak</h2>
				<ContactInput addContact={this.onAddContactHandler} />
				<h2>Daftar Kontak</h2>
				<ContactList
					contacts={this.state.contacts.map((contact) => ({
						...contact,
						onDelete: this.onDeleteHandler,
					}))}
					onDelete={this.onDeleteHandler}
				/>
				<h2>Arsip Kontak</h2>
				<ContactInput addContact={this.onAddContactHandler} />
			</div>
		);
	}
}

export default ContactApp;
