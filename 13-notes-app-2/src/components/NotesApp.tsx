import NoteList from './NoteList';

const NotesApp = () => {
	return (
		<>
			<header>
				<h1>Notes App </h1>
			</header>
			<main>
				<section className='form-section'>search note</section>
				<section className='form-section'></section>
				<section className='form-section'>
					<h2>Notes</h2>
					<NoteList />
				</section>
			</main>
		</>
	);
};
export default NotesApp;
