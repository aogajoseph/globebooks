import React from 'react';
import '../css/Book.css';

const Book = ({ book }) => {
  // Function to determine the age rating
  const getAgeRating = (category) => {
    switch(category.toLowerCase()) {
      case 'fiction':
      case 'fantasy':
        return '18+';
      case 'mystery':
        return '21+';
      case 'self-help':
        return 'General';
      default:
        return 'General';
    }
  };

  return (
    <div className="book">
      {/* Price */}
      <span className="price">Free{/*book.price*/}</span>

      {/* Book Cover */}
      <img src={book.cover} alt={`${book.title} cover`} className="cover" />

      {/* Book Details */}
      <div className="details">
        <h3 className="title">{book.title}</h3>
        <p className="author">By: {book.author}</p>
        <p className="category">Category: {book.category}</p>

        {/* Description */}
        <p className="description">Description: {book.description}</p>
      </div>

      {/* Rating */}
        <div className="rating">
        {Array(book.rating).fill("⭐").join("")}
      </div>

      {/* Age Rating */}
      <div className="age-rating">
        <strong>Rated {getAgeRating(book.category)}</strong>
      </div>

      {/* Download Links */}
      <div className="download-links">
        <a href={book.pdfLink} download className="download-link">
          <p>Download Free Copy</p>
        </a>
        <p className="highlight">Don't like reading?</p>
        <a href={book.audioLink} download className="download-link">
          Download audiobook
        </a>
        <a
          href={book.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default Book;