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
		<div className='bg-white p-5 mb-4 border border-gray-300 rounded-md shadow'>
			{isEditing ? (
				<form
					onSubmit={handleEditSubmit}
					className='bg-secondary p-5 rounded-md shadow-lg mb-4'>
					<div className='mb-4'>
						<input
							type='text'
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
							placeholder='Whats Happening?!'
							required
							className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
						/>
					</div>
					<div className='mb-4'>
						<textarea
							value={newBody}
							onChange={(e) => setNewBody(e.target.value)}
							placeholder='Details'
							required
							className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
						/>
					</div>
					<div className='flex gap-2'>
						<button
							type='submit'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'>
							Save
						</button>
						<button
							type='button'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<>
					<h3 className='text-xl text-primary mb-2'>{note.title}</h3>
					<p className='text-base mb-4'>{note.body}</p>
					<p className='text-sm text-gray-500 mb-3'>
						{new Date(note.createdAt).toLocaleDateString()}
					</p>
					<div className='flex gap-2'>
						<button
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => toggleArchiveNote(note.id)}>
							{note.archived ? 'Unarchive' : 'Archive'}
						</button>
						<button
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => deleteNote(note.id)}>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default NoteItem;
