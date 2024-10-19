import { useState } from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import { ContactItemProps } from '../utils/PropsTypes';
import ContactInput from './ContactInput';

const ContactApp = () => {
	// Define onDeleteHandler before using it in useState
	const onDeleteHandler = (id: number) => {
		setContacts((prevContacts) =>
			prevContacts.filter((contact) => contact.id !== id)
		);
	};

	// Initialize contacts state after onDeleteHandler is defined
	const [contacts, setContacts] = useState<ContactItemProps[]>(() =>
		getData().map((contact) => ({
			...contact,
			onDelete: onDeleteHandler,
		}))
	);

	// Add contact handler
	const onAddContactHandler = (name: string, tag: string) => {
		const newContact: ContactItemProps = {
			id: +new Date(),
			name,
			tag,
			imageUrl: '/images/default.jpg',
			onDelete: onDeleteHandler, // Include the onDelete handler
		};

		setContacts((prevContacts) => [...prevContacts, newContact]);
	};

	return (
		<div className='contact-app'>
			<h1>Aplikasi Kontak</h1>
			<h2>Tambah Kontak</h2>
			<ContactInput addContact={onAddContactHandler} />
			<h2>Daftar Kontak</h2>
			<ContactList contacts={contacts} onDelete={onDeleteHandler} />
			<h2>Arsip Kontak</h2>
			<ContactInput addContact={onAddContactHandler} />
		</div>
	);
};

export default ContactApp;
