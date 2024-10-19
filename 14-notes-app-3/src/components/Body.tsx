import AddNote from './AddNote';
import ActiveNote from './ActiveNote';
import ArchiveNote from './ArchiveNote';
import { Note } from '../utils/types';

type BodyProps = {
	notes: Note[];
	addNote: (title: string, body: string) => void;
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
};

const Body = ({
	notes,
	addNote,
	editNote,
	deleteNote,
	toggleArchiveNote,
}: BodyProps) => {
	const activeNotes = notes.filter((note) => !note.archived);
	const archivedNotes = notes.filter((note) => note.archived);

	return (
		<main className='body-container'>
			<AddNote addNote={addNote} />
			<ActiveNote
				notes={activeNotes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
			<ArchiveNote
				notes={archivedNotes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</main>
	);
};

export default Body;
