import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import UserPage from './pages/UserPage';
import ResetPassword from './pages/ResetPassword';
import Shelf from './components/PreviewShelf';
import Downloads from './components/Downloads';
import Settings from './components/Settings';
import HelpCenter from './components/HelpCenter';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  const [query, setQuery] = useState(''); 

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero query={query} setQuery={setQuery} />  {/* Pass both query and setQuery to Hero */}
              <Shelf query={query} />
              <Footer />
            </>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;