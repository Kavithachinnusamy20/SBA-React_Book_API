
import React, { useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';

const App = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === 'Enter') {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAj2J21t8UCDF4ls9TGQcSB_p3ILkVAtao&maxResults=40`
        )
        .then((res) => {
          setData(res.data.items);
          res.data.items.forEach((item) =>
            console.log(`Title: ${item.volumeInfo.title}`)
          );
        })
        .catch((err) => console.error('API Error:', err));
    }
  };

  return (

    <div className="app">
      
    </div>
  );
};

export default App;