import React, { useState } from 'react';
import { NavbarProps } from '../utils/types';

const Navbar = ({ onSearch }: NavbarProps) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSearchClick = () => {
		onSearch(searchTerm);
	};

	return (
		<header className='navbar'>
			<input
				type='text'
				placeholder='Search notes...'
				value={searchTerm}
				onChange={handleSearchChange}
				className='navbar-search-input'
			/>
			<button
				type='button'
				onClick={handleSearchClick}
				className='navbar-search-btn'>
				Search
			</button>
		</header>
	);
};

export default Navbar;
