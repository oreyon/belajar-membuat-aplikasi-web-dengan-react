// src/components/BookItem.tsx
import React from 'react';
import { Book } from '../utils/types';

interface BookItemProps {
	book: Book;
	onDelete: (id: number) => void;
	onEdit: (book: Book) => void;
	onToggleComplete: (id: number) => void;
}

const BookItem: React.FC<BookItemProps> = ({
	book,
	onDelete,
	onEdit,
	onToggleComplete,
}) => {
	return (
		<div data-testid='bookItem' className='book-item'>
			<h3 data-testid='bookItemTitle' className='book-title'>
				{book.title}
			</h3>
			<p data-testid='bookItemAuthor' className='book-author'>
				Penulis: {book.author}
			</p>
			<p data-testid='bookItemYear' className='book-year'>
				Tahun: {book.year}
			</p>

			<div className='book-actions'>
				<button
					onClick={() => onToggleComplete(book.id)}
					className='btn-action'>
					{book.isComplete ? 'Belum Selesai Dibaca' : 'Selesai Dibaca'}
				</button>
				<button onClick={() => onEdit(book)} className='btn-action'>
					Edit Buku
				</button>
				<button onClick={() => onDelete(book.id)} className='btn-action'>
					Hapus Buku
				</button>
			</div>
		</div>
	);
};

export default BookItem;
