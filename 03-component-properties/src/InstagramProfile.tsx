import { ProfileProps } from './ProfileProps';

const InstagramProfile = (props: ProfileProps): JSX.Element | string | null => {
	const name = props.name;
	const username = props.username;
	const bio = props.bio;
	const isVerified = props.isVerified;

	return (
		<div className='container'>
			<dl>
				<dt>Name: </dt>
				<dd>{name}</dd>
				<dt>Username: </dt>
				<dd>{username}</dd>
				<dt>Bio: </dt>
				<dd>{bio}</dd>
				<dt>Verified: </dt>
				<dd>{isVerified ? 'yes' : 'no'}</dd>
			</dl>
		</div>
	);
};
export default InstagramProfile;
