import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Shelf from './components/Shelf';
import Footer from './components/Footer';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Routes>
        {/* Home route with Header, Shelf, and Footer */}
        <Route path="/" element={
          <>
            <Header query={query} setQuery={setQuery} />
            <Shelf query={query} />
            <Footer />
          </>
        } />

        {/* Sign Up page (without Header, Shelf, Footer) */}
        <Route path="/register" element={<Register />} />

        {/* Sign In page (without Header, Shelf, Footer) */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;