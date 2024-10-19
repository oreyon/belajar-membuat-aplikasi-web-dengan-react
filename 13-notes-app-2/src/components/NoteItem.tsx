type NoteItemProps = {
	id: number;
	title: string;
	body: string;
	createdAt: string;
	arhived: boolean;
};

const NoteItem = (props: NoteItemProps) => {
	return (
		<div className='form-item'>
			<h3 className='form-title'>{props.title}</h3>
			<p className='form-body'>
				Created at: {new Date(props.createdAt).toLocaleDateString()}
			</p>
			<p className='form-body'>{props.body}</p>
			<p className='form-body'>
				Status: {props.arhived ? 'Archived' : 'Active'}
			</p>

			<div className='form-actions'>
				<button className='btn-action'>Archive Note</button>
				<button className='btn-action'>Edit Note</button>
				<button className='btn-action'>Hapus Note</button>
			</div>
		</div>
	);
};
export default NoteItem;
