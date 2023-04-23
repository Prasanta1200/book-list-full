// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('/books')
//       .then(res => setBooks(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/books/${id}`)
//       .then(res => {
//         alert('Book deleted successfully');
//         setBooks(books.filter(book => book._id !== id));
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <h1>Book Lists</h1>
//       <Link to="/add-book">Add Book</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Author Name</th>
//             <th>Genre</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map(book => (
//             <tr key={book._id}>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>{book.genre}</td>
//               <td>
//                 <Link to={`/book/${book._id}`}>View</Link> |{' '}
//                 <Link to={`/edit-book/${book._id}`}>Edit</Link> |{' '}
//                 <button onClick={() => handleDelete(book._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookList;

import React, { useState, useEffect } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    axios
      .get("https://book-list-0jc2.onrender.com/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://book-list-0jc2.onrender.com/books", { title, author, genre })
      .then((response) => {
        alert(response.data.message);
        setTitle("");
        setAuthor("");
        setGenre("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookList;





