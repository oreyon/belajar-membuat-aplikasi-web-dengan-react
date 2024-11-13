import React, { useState } from 'react';
import { AddNoteProps } from '../utils/types';

const AddNote = ({ addNote }: AddNoteProps) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [maxTitleLength] = useState(50);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		addNote(title, body);
		setTitle('');
		setBody('');
	};

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value;
		if (newTitle.length <= maxTitleLength) {
			setTitle(newTitle);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-secondary p-5 rounded-md shadow-lg mb-8'>
			<div className='mb-4'>
				<input
					type='text'
					value={title}
					maxLength={maxTitleLength}
					onChange={handleTitleChange}
					placeholder='Whats Happening?!'
					required
					className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
				/>
				<small className='text-sm text-gray-500'>
					{maxTitleLength - title.length} remaining
				</small>
			</div>
			<div className='mb-4'>
				<textarea
					value={body}
					onChange={(event) => setBody(event.target.value)}
					placeholder='Details'
					required
					className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
				/>
			</div>
			<button
				type='submit'
				className='py-3 px-5 text-lg text-white bg-primary rounded-md hover:bg-quaternary'>
				Add Note
			</button>
		</form>
	);
};

export default AddNote;
