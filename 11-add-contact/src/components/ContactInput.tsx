import { ChangeEvent, FormEvent, useState } from 'react';

type ContactInputProps = {
	addContact: (name: string, tag: string) => void;
};

const ContactInput = ({ addContact }: ContactInputProps) => {
	const [name, setName] = useState<string>('');
	const [tag, setTag] = useState<string>('');

	const onNameChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const onTagChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTag(event.target.value);
	};

	const onSubmitEventHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addContact(name, tag);
		// Reset the form state
		setName('');
		setTag('');
	};

	return (
		<form className='contact-input' onSubmit={onSubmitEventHandler}>
			<input
				type='text'
				placeholder='Nama'
				value={name}
				onChange={onNameChangeEventHandler}
			/>
			<input
				type='text'
				placeholder='Tag'
				value={tag}
				onChange={onTagChangeEventHandler}
			/>
			<button type='submit'>Tambah</button>
		</form>
	);
};

export default ContactInput;
