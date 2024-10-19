import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import { ContactItemProps } from '../utils/PropsTypes';
import DeleteButton from './DeleteButton';

const ContactItem = ({
	id,
	imageUrl,
	name,
	tag,
	onDelete,
}: ContactItemProps): JSX.Element | null => {
	return (
		<div className='contact-item'>
			<ContactItemImage imageUrl={imageUrl} />
			<ContactItemBody name={name} tag={tag} />
			<DeleteButton id={id} onDelete={onDelete} />
		</div>
	);
};
export default ContactItem;
