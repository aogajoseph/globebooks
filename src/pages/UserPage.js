import React from 'react';
import Header from '../components/UserHeader';
import Shelf from '../components/UserShelf';
import Footer from '../components/Footer';
import { books } from '../data/books';

const UserPage = ({ username }) => {
  // Add any state for filtering if needed
  const [query, setQuery] = React.useState('');

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <Shelf books={books} query={query} /> {/* Pass books and query */}
      <Footer />
    </div>
  );
};

export default UserPage;
