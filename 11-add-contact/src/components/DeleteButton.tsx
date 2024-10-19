import { DeleteButtonProps } from '../utils/PropsTypes';

const DeleteButton = ({
	id,
	onDelete,
}: DeleteButtonProps): JSX.Element | null => {
	return (
		<button
			type='submit'
			className='contact-item__delete'
			onClick={() => onDelete(id)}>
			X
		</button>
	);
};
export default DeleteButton;
