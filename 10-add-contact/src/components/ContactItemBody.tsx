import { ContactItemBodyProps } from '../utils/PropsTypes';

const ContactItemBody = ({
	name,
	tag,
}: ContactItemBodyProps): JSX.Element | null => {
	return (
		<div className='contact-item__body'>
			<h3 className='contact-item__title'>{name}</h3>
			<p className='contact-item__username'>@{tag}</p>
		</div>
	);
};
export default ContactItemBody;
