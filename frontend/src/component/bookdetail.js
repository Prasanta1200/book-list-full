import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  const handleEditClick = () => {
    window.location.replace(`/books/${id}/edit`);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`https://book-list-0jc2.onrender.com/books/${id}`);
      window.location.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default BookDetail;
