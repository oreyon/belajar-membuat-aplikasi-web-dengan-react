import NoteList from './NoteList';
import { NoteListProps } from '../utils/types';

const ArchiveNote = ({
	notes,
	editNote,
	deleteNote,
	toggleArchiveNote,
}: NoteListProps) => {
	return (
		<div>
			<h2>Archived Notes</h2>
			<NoteList
				notes={notes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

export default ArchiveNote;
