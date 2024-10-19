import { HeaderProps } from './PropertiesTypes';

const Header = (props: HeaderProps): JSX.Element | string | null => {
	return (
		<header>
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</header>
	);
};
export default Header;
