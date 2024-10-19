import './App.css';
import DicodingLogo from './assets/dicoding-logo.png';

function App() {
	return (
		<div className=''>
			<h1>Biodata Perusahaan</h1>
			<ul>
				<li>Nama: Dicoding Indonesia</li>
				<li>Bidang: Education</li>
				<li>Tagline: Decode Ideas, Discover Potential</li>
				<li>
					<img src='dicoding-logo.png' alt='Dicoding logo' />
				</li>
				<li>
					<img src={DicodingLogo} alt='Dicoding logo' />
				</li>
			</ul>
		</div>
	);
}

export default App;
