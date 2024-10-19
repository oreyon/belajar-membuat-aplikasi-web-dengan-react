import { getInitialData } from '../utils/data';
import NoteItem from './NoteItem';

const NoteList = () => {
	return (
		<div className='form-group'>
			<section className='form-section'>
				<h2>Active Notes</h2>
				{getInitialData.map((note) => (
					<NoteItem
						key={note.id}
						id={note.id}
						title={note.title}
						body={note.body}
						createdAt={note.createdAt}
						arhived={note.archived}
					/>
				))}
			</section>
			<section className='form-section'>
				<h2>Archive Notes</h2>
			</section>
		</div>
	);
};
export default NoteList;
