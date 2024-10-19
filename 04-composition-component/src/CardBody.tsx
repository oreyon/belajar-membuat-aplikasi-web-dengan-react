import Button from './Button';
import { CardBodyProps } from './PropertiesTypes';

const CardBody = (props: CardBodyProps): JSX.Element | string | null => {
	return (
		<div className=''>
			<p>{props.date}</p>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<Button link={props.link} />
		</div>
	);
};
export default CardBody;
