import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import UserPage from './pages/UserPage';
import ResetPassword from './pages/ResetPassword';
import Shelf from './components/PreviewShelf';
import Footer from './components/Footer';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header query={query} setQuery={setQuery} />
            <Shelf query={query} />
            <Footer />
          </>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;