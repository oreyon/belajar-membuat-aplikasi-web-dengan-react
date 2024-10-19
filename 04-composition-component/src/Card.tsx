import CardBody from './CardBody';
import CardHeader from './CardHeader';
import { CardProps } from './PropertiesTypes';

const Card = (props: CardProps): JSX.Element | string | null => {
	return (
		<article>
			<CardHeader image={props.image} category={props.category} />
			<CardBody
				date={props.date}
				title={props.title}
				content={props.content}
				link={props.link}
			/>
		</article>
	);
};
export default Card;
