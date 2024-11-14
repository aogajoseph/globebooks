import React from 'react';
import InnerNavbar from '../components/InnerNavbar';
import InnerHero from '../components/InnerHero';
import Shelf from '../components/UserShelf';
import Footer from '../components/Footer';
import { books } from '../data/books';

const UserPage = ({ username }) => {
  // Add any state for filtering if needed
  const [query, setQuery] = React.useState('');

  return (
    <div>
      <InnerNavbar query={query} setQuery={setQuery} />
      <InnerHero />
      <Shelf books={books} query={query} /> {/* Pass books and query */}
      <Footer />
    </div>
  );
};

export default UserPage;
