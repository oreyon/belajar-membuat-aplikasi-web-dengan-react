import './App.css';
import InstagramProfile from './InstagramProfile';

function App() {
	return (
		<>
			<InstagramProfile
				name='John Doe'
				username='johndoe'
				bio='I am a software developer'
				isVerified={true}
			/>
		</>
	);
}

export default App;
