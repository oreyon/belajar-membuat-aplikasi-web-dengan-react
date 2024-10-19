import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import MyForm from './components/MyForm';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <App /> */}
		<MyForm />
	</StrictMode>
);
