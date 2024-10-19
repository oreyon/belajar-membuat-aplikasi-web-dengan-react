import { useState } from 'react';
import { NoteItemProps } from '../utils/types';

const NoteItem = ({
	note,
	deleteNote,
	editNote,
	toggleArchiveNote,
}: NoteItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(note.title);
	const [newBody, setNewBody] = useState(note.body);

	const handleEditSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		editNote(note.id, newTitle, newBody);
		setIsEditing(false); // Exit edit mode after saving
	};

	return (
		<div className='note-item'>
			{isEditing ? (
				<form onSubmit={handleEditSubmit} className='form-section'>
					<div className='form-group'>
						<input
							type='text'
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
							placeholder='Whats Happening?!'
							required
							className='form-input'
						/>
					</div>
					<div className='form-group'>
						<textarea
							value={newBody}
							onChange={(e) => setNewBody(e.target.value)}
							placeholder='Details'
							required
							className='form-input'
						/>
					</div>
					<div className='note-item-actions'>
						<button type='submit' className='btn-action'>
							Save
						</button>
						<button
							type='button'
							className='btn-action'
							onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<>
					<h3 className='note-item-title'>{note.title}</h3>
					<p className='note-item-body'>{note.body}</p>
					<p className='note-item-date'>
						{new Date(note.createdAt).toLocaleDateString()}
					</p>
					<div className='note-item-actions'>
						<button className='btn-action' onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button
							className='btn-action'
							onClick={() => toggleArchiveNote(note.id)}>
							{note.archived ? 'Unarchive' : 'Archive'}
						</button>
						<button className='btn-action' onClick={() => deleteNote(note.id)}>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default NoteItem;
