// src/App.tsx
import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { Book } from './utils/types';

const App: React.FC = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
	const [editBook, setEditBook] = useState<Book | null>(null);

	useEffect(() => {
		// Load initial books from localStorage or default (dummy) data
		const savedBooks = JSON.parse(localStorage.getItem('books') || '[]');
		setBooks(savedBooks);
		setFilteredBooks(savedBooks);
	}, []);

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
		setFilteredBooks(books);
	}, [books]);

	const addOrEditBook = (book: Book) => {
		if (editBook) {
			setBooks(books.map((b) => (b.id === book.id ? book : b)));
			setEditBook(null);
		} else {
			setBooks([...books, book]);
		}
	};

	const deleteBook = (id: number) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	const toggleCompleteBook = (id: number) => {
		setBooks(
			books.map((book) =>
				book.id === id ? { ...book, isComplete: !book.isComplete } : book
			)
		);
	};

	const searchBooks = (query: string) => {
		const lowerCaseQuery = query.toLowerCase();
		const filtered = books.filter(
			(book) =>
				book.title.toLowerCase().includes(lowerCaseQuery) ||
				book.author.toLowerCase().includes(lowerCaseQuery)
		);
		setFilteredBooks(filtered);
	};

	return (
		<>
			<header>
				<h1>Bookshelf App</h1>
			</header>
			<main>
				<section className='form-section'>
					<SearchBar onSearch={searchBooks} />
				</section>
				<section className='form-section'>
					<BookForm onSubmit={addOrEditBook} editBook={editBook} />
				</section>
				<section className='form-section'>
					<BookList
						books={filteredBooks}
						onDelete={deleteBook}
						onEdit={setEditBook}
						onToggleComplete={toggleCompleteBook}
					/>
				</section>
			</main>
		</>
	);
};

export default App;
