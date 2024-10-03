import React from 'react';
import Book from './Book';
import books from '../data/books';

const Shelf = ({ query }) => {

    const filteredBooks = books.filter((book) => {
        
        const lowerQuery = query.toLowerCase();
        
            return (
                book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery) ||
                book.category.toLowerCase().includes(lowerQuery)
            );
        }
    );

    return (

        <div className="books">
            {filteredBooks.length > 0 ? (
                filteredBooks.map((book, index) => (
                    <Book key={index} book={book} query={query} /> 
                ))
            ) : ( 
                <p className="error-message">Oops! No matching books found.</p> 
            )}
        
        </div>
    
    );
};

export default Shelf;