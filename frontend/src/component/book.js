import React from 'react';

const Book = ({ book, handleDelete, handleEdit }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <button onClick={() => handleEdit(book)}>Edit</button>
      <button onClick={() => handleDelete(book._id)}>Delete</button>
    </div>
  );
};

export default Book;
