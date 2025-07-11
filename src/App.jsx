import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

import SearchBook from './Components/SearchBook';
import About from './Pages/About';  
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/bookSearch">Books</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Welcome to Home</div>} />
        <Route path="/bookSearch" element={<SearchBook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;