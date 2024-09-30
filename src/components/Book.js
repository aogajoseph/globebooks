import React from 'react';
import '../css/Book.css';

const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
};

const Book = ({ book, query }) => {
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
        <h3 className="title">{highlightText(book.title, query)}</h3>
        <p className="author">{highlightText(`By: ${book.author}`, query)}</p>
        <p className="category">{highlightText(`Category: ${book.category}`, query)}</p>

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
          <p>Get a Free Copy</p>
        </a>
        <p className="focus">Don't like reading?</p>
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