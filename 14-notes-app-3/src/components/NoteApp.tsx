// src/components/NoteApp.tsx
import { useState } from 'react';
import { getInitialData } from '../utils/data';
import Navbar from './Navbar';
import Body from './Body';
import { Note } from '../utils/types';

const NoteApp = () => {
	const [notes, setNotes] = useState(getInitialData);
	const [filteredNotes, setFilteredNotes] = useState(getInitialData);

	const addNote = (title: string, body: string) => {
		const newNote: Note = {
			id: +new Date(),
			title,
			body,
			archived: false,
			createdAt: new Date().toISOString(),
		};
		const updatedNotes = [...notes, newNote];
		setNotes(updatedNotes);
		setFilteredNotes(updatedNotes);
	};

	const editNote = (id: number, newTitle: string, newBody: string) => {
		const updatedNotes = notes.map((note) =>
			note.id === id ? { ...note, title: newTitle, body: newBody } : note
		);
		setNotes(updatedNotes);
		setFilteredNotes(updatedNotes);
	};

	const deleteNote = (id: number) => {
		const updatedNotes = notes.filter((note) => note.id !== id);
		setNotes(updatedNotes);
		setFilteredNotes(updatedNotes);
	};

	const toggleArchiveNote = (id: number) => {
		const updatedNotes = notes.map((note) =>
			note.id === id ? { ...note, archived: !note.archived } : note
		);
		setNotes(updatedNotes);
		setFilteredNotes(updatedNotes);
	};

	const handleSearch = (searchTerm: string) => {
		if (searchTerm.trim()) {
			const searchResults = notes.filter((note) =>
				note.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredNotes(searchResults);
		} else {
			setFilteredNotes(notes);
		}
	};

	return (
		<div>
			<Navbar onSearch={handleSearch} />
			<Body
				notes={filteredNotes}
				addNote={addNote}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

export default NoteApp;
