import { ContactItemBodyProps } from '../utils/PropsTypes';

const ContactItemBody = (
	props: ContactItemBodyProps
): JSX.Element | string | null => {
	return (
		<div className='contact-item__body'>
			<h3 className='contact-item__title'>{props.name}</h3>
			<p className='contact-item__username'>@{props.tag}</p>
		</div>
	);
};
export default ContactItemBody;
