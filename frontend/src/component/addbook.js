import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const book = { title, author, genre };
    try {
      await axios.post('https://book-list-0jc2.onrender.com/books', book);
      setTitle('');
      setAuthor('');
      setGenre('');
      alert('Book added successfully');
    } catch (err) {
      console.error(err);
      alert('Error occurred while adding book');
    }
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input type="text" className="form-control" id="author" value={author} onChange={e => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input type="text" className="form-control" id="genre" value={genre} onChange={e => setGenre(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
