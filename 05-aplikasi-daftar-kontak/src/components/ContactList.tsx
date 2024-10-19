import ContactItem from './ContactItem';
import { ContactListProps } from '../utils/PropsTypes';

const ContactList = (props: ContactListProps): JSX.Element | string | null => {
	return (
		<div className='contact-list'>
			{props.contacts.map((contact) => (
				<ContactItem key={contact.id} {...contact} />
			))}
		</div>
	);
};
export default ContactList;
