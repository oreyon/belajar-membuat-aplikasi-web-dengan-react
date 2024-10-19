import ContactItem from './ContactItem';
import { ContactListProps } from '../utils/PropsTypes';

const ContactList = ({
	contacts,
	onDelete,
}: ContactListProps): JSX.Element | null => {
	return (
		<div className='contact-list'>
			{contacts.map((contact) => (
				<ContactItem
					key={contact.id}
					{...contact} // Spread the contact object
					onDelete={onDelete} // onDelete comes from props
				/>
			))}
		</div>
	);
};
export default ContactList;
