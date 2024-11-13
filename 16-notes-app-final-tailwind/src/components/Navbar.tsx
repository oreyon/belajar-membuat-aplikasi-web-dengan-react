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
		<header className='bg-primary p-4 flex justify-center items-center text-primary'>
			<input
				type='text'
				placeholder='Search notes...'
				value={searchTerm}
				onChange={handleSearchChange}
				className='navbar-search-input p-2 text-base border border-quaternary rounded-md w-3/5 mr-2 bg-tertiary'
			/>
			<button
				type='button'
				onClick={handleSearchClick}
				className='navbar-search-btn py-2 px-5 text-base text-white bg-primary rounded-md hover:bg-quaternary'>
				Search
			</button>
		</header>
	);
};

export default Navbar;
