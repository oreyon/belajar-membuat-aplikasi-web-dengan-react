import NoteList from './NoteList';
import { NoteListProps } from '../utils/types';

const ActiveNote = ({
	notes,
	editNote,
	deleteNote,
	toggleArchiveNote,
}: NoteListProps) => {
	return (
		<div>
			<h2>Active Notes</h2>
			<NoteList
				notes={notes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

export default ActiveNote;
