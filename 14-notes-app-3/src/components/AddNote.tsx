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
		<form onSubmit={handleSubmit} className='form-section'>
			<div className='form-group'>
				<input
					type='text'
					value={title}
					maxLength={maxTitleLength}
					onChange={handleTitleChange}
					placeholder='Whats Happening?!'
					required
					className='form-input'
				/>
				<small>{maxTitleLength - title.length} remaining</small>
			</div>
			<div className='form-group'>
				<textarea
					value={body}
					onChange={(event) => setBody(event.target.value)}
					placeholder='Details'
					required
					className='form-input'
				/>
			</div>
			<button type='submit' className='btn-submit'>
				Add Note
			</button>
		</form>
	);
};

export default AddNote;
