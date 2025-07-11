import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

import SearchBook from './Components/SearchBook';
import About from './pages/About';  
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
        <Route path="/" element={
          <div>
<div style={{ textAlign: 'center', color: 'Darkgreen', marginTop: '50px' }}>
  <h1><strong>Welcome to Home</strong></h1>
</div>
          <p><h4 className="category-text">
        <p><strong>Fiction:</strong> Includes various subgenres like historical fiction, fantasy, science fiction, romance, mystery, and more.</p>
        <p><strong>Non-Fiction:</strong> Covers a wide range of subjects like history, biography, science, self-help, etc.</p>
        <p><strong>Drama:</strong> Plays and scripts for theatrical performance.</p>
        <p><strong>Poetry:</strong> Collections of poems.</p>
        <p><strong>Fables, Fairy Tales, Folklore:</strong> Traditional stories with morals or fantastical elements.</p>
      </h4> </p></div>} />
        <Route path="/bookSearch" element={<SearchBook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;