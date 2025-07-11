netlify link:https://reactbookapik.netlify.app/


#Book Explorer

Book Explorer is a React-based web application that allows users to search for books using the Google Books API. It provides an intuitive interface for discovering book details—including authorship, pricing, and previews—and is built with reusable components, routing, and modern hooks to showcase a clean development structure and polished user experience.

## Key Features

-  **Book Search**: Type a keyword to fetch up to 40 related books in real time.
-  **Book Cards**: Display books with thumbnails, titles, and list prices.
-  **Modal Details**: Click any book to open a modal showing more metadata like publisher, authors, published date, and a direct preview link.
-  **Routing with React Router**: Includes navigation across Home, Book Search, and About pages.
-  **Styled Components**: Clean layout designed using custom CSS classes.
                                 
React          - UI library for building interactive views  
React Router   - Client-side navigation                     
Axios          - Fetching book data from external API       
Google Books API - External data provider for book metadata 

## API Usage

The app uses Google Books API to retrieve books based on user input. Example request format:

 The API key is hardcoded during development. 

##  How It Works

- The user enters a search keyword and presses **Enter** or clicks **Search**.
- The app builds a URL dynamically using `search` state and calls Google Books API via Axios.
- Valid results (with thumbnails and prices) are mapped into card components.
- Clicking a card opens a modal view with extended information.
- Routing lets users explore different parts of the site without page reloads.

---
## Upcoming Enhancements

-  Autocomplete suggestions for search input
-  Loading during API fetch
-  Deployment on Netlify 
