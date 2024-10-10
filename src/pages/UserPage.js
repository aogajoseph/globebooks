import React from 'react';
import Header from '../components/Header';
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';
import { books } from '../data/books'; // Assuming you import books from somewhere

import '../css/UserPage.css';

const Home = ({ username }) => {
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

export default Home;