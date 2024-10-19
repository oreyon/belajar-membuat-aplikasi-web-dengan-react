import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import { ContactItemProps } from '../utils/PropsTypes';

const ContactItem = (props: ContactItemProps): JSX.Element | string | null => {
	return (
		<div className='contact-item'>
			<ContactItemImage imageUrl={props.imageUrl} />
			<ContactItemBody name={props.name} tag={props.tag} />
		</div>
	);
};
export default ContactItem;
