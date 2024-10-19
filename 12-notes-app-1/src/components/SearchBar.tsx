// src/components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSearch} className='book-search-form'>
			<div className='form-group'>
				<label htmlFor='searchBookTitle'>Cari Buku</label>
				<input
					id='searchBookTitle'
					type='text'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className='form-input'
				/>
			</div>
			<button type='submit' className='btn-submit'>
				Cari
			</button>
		</form>
	);
};

export default SearchBar;
