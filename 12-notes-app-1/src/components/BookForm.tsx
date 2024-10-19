// src/components/BookForm.tsx
import React, { useState, useEffect } from 'react';
import { Book } from '../utils/types';

interface BookFormProps {
	onSubmit: (book: Book) => void;
	editBook?: Book | null;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, editBook }) => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [year, setYear] = useState<number | ''>('');
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		if (editBook) {
			setTitle(editBook.title);
			setAuthor(editBook.author);
			setYear(editBook.year);
			setIsComplete(editBook.isComplete);
		}
	}, [editBook]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newBook: Book = {
			id: editBook ? editBook.id : +new Date(),
			title,
			author,
			year: typeof year === 'number' ? year : parseInt(year),
			isComplete,
		};

		onSubmit(newBook);
		resetForm();
	};

	const resetForm = () => {
		setTitle('');
		setAuthor('');
		setYear('');
		setIsComplete(false);
	};

	return (
		<form onSubmit={handleSubmit} className='book-search-form'>
			<div className='form-group'>
				<label htmlFor='bookFormTitle'>Judul</label>
				<input
					id='bookFormTitle'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					className='form-input'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='bookFormAuthor'>Penulis</label>
				<input
					id='bookFormAuthor'
					type='text'
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					required
					className='form-input'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='bookFormYear'>Tahun</label>
				<input
					id='bookFormYear'
					type='number'
					value={year}
					onChange={(e) => setYear(Number(e.target.value))}
					required
					className='form-input'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='bookFormIsComplete'>Selesai dibaca</label>
				<input
					id='bookFormIsComplete'
					type='checkbox'
					checked={isComplete}
					onChange={(e) => setIsComplete(e.target.checked)}
				/>
			</div>

			<button type='submit' className='btn-submit'>
				{editBook ? 'Edit Buku' : 'Masukkan Buku ke rak'}
			</button>
		</form>
	);
};

export default BookForm;
