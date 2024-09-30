import React, { useState } from 'react';
import Header from './components/Header';
import Shelf from './components/Shelf';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  
  const [query, setQuery] = useState('');
  
  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} />
      <Shelf query={query} />
      <Footer />
    </div>
  );
}

export default App;