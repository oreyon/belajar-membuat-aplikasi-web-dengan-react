import { ButtonProps } from './PropertiesTypes';

const Button = (props: ButtonProps): JSX.Element | string | null => {
	return <a href={props.link}>Find Out More</a>;
};
export default Button;
