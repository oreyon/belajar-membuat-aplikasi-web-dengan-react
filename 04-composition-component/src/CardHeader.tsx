import { CardHeaderProps } from './PropertiesTypes';

const CardHeader = (props: CardHeaderProps): JSX.Element | string | null => {
	return (
		<header>
			<h4>{props.category}</h4>
			<img src={props.image} alt='' />
		</header>
	);
};
export default CardHeader;
