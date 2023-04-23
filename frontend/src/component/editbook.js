import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBook = (props) => {
  const [book, setBook] = useState({ title: '', author: '', genre: '' });

  useEffect(() => {
    axios.get(`https://book-list-0jc2.onrender.com/books/${props.match.params.id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://book-list-0jc2.onrender.com/books/${props.match.params.id}`, book)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    props.history.push('/');
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={book.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={book.author} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" value={book.genre} onChange={handleInputChange} />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
