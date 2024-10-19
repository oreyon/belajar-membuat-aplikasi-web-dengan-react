// src/components/BookList.tsx
import React from 'react';
import { Book } from '../utils/types';
import BookItem from './BookItem';

interface BookListProps {
	books: Book[];
	onDelete: (id: number) => void;
	onEdit: (book: Book) => void;
	onToggleComplete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({
	books,
	onDelete,
	onEdit,
	onToggleComplete,
}) => {
	const incompleteBooks = books.filter((book) => !book.isComplete);
	const completeBooks = books.filter((book) => book.isComplete);

	return (
		<div className='form-group'>
			<section className='form-section'>
				<h2 className='form-title'>Belum Selesai Dibaca</h2>
				{incompleteBooks.length ? (
					incompleteBooks.map((book) => (
						<BookItem
							key={book.id}
							book={book}
							onDelete={onDelete}
							onEdit={onEdit}
							onToggleComplete={onToggleComplete}
						/>
					))
				) : (
					<p className='book-title'>
						Tidak ada buku yang belum selesai dibaca.
					</p>
				)}
			</section>

			<section className='form-section'>
				<h2 className='form-title'>Selesai Dibaca</h2>
				{completeBooks.length ? (
					completeBooks.map((book) => (
						<BookItem
							key={book.id}
							book={book}
							onDelete={onDelete}
							onEdit={onEdit}
							onToggleComplete={onToggleComplete}
						/>
					))
				) : (
					<p className='book-title'>Tidak ada buku yang selesai dibaca.</p>
				)}
			</section>
		</div>
	);
};

export default BookList;
