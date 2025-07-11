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
        <Route path="/" element={
          <div><h1>Welcome to Home</h1>
          <p><h4>
            Fiction: Includes various subgenres like historical fiction, fantasy, science fiction, romance, mystery, and more.
Non-Fiction: Covers a wide range of subjects like history, biography, science, self-help, etc.
Drama: Plays and scripts for theatrical performance.
Poetry: Collections of poems.
Fables, Fairy Tales, Folklore: Traditional stories with morals or fantastical elements..</h4> </p></div>} />
        <Route path="/bookSearch" element={<SearchBook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;