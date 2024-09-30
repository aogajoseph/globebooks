import React from 'react';
import books from '../data/books';
import Book from './Book';

const Shelf = () => {
    return (
        <div className="books">
            {/* Check if there are any books to display */}
            {books.length > 0 ? (
                books.map((book, index) => (
                    <Book key={index} book={book} />
                ))
            ) : (
                <p className='no-results'>Oops! Currently not in stock.</p>
            )}
        </div>
    );
};

export default Shelf;