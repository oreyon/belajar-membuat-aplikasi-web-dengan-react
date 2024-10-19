import { ContactItemImageProps } from '../utils/PropsTypes';

const ContactItemImage = (
	props: ContactItemImageProps
): JSX.Element | string | null => {
	return (
		<div className='contact-item__image'>
			<img src={props.imageUrl} alt='contact avatar' />
		</div>
	);
};
export default ContactItemImage;
