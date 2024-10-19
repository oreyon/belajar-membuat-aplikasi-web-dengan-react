import { ContactItemImageProps } from '../utils/PropsTypes';

const ContactItemImage = ({
	imageUrl,
}: ContactItemImageProps): JSX.Element | null => {
	return (
		<div className='contact-item__image'>
			<img src={imageUrl} alt='contact avatar' />
		</div>
	);
};
export default ContactItemImage;
