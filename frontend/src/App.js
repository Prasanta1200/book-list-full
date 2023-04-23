
import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import BookList from './component/booklist';
import AddBook from './component/addbook';
import EditBook from './component/editbook';
import BookDetail from './component/bookdetail';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('https://book-list-0jc2.onrender.com/login', { email, password });
      setLoggedIn(true);
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegistration = async (email, password) => {
    try {
      const response = await axios.post('https://book-list-0jc2.onrender.com/register', { email, password });
      setLoggedIn(true);
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('https://book-list-0jc2.onrender.com/logout');
      setLoggedIn(false);
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Bookstore</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Books</Link>
                </li>
                {loggedIn && (
                  <>
                    <li className="nav-item">
                      <Link to="/add" className="nav-link">Add Book</Link>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                )}
              </ul>
              {!loggedIn && (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
            <Route path="/register" element={<RegistrationPage handleRegistration={handleRegistration} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<button type="submit" className="btn btn-primary">Login</button>
</form>
);
}

function RegistrationPage({ handleRegistration }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
handleRegistration(email, password);
};

return (
<form onSubmit={handleSubmit}>
<div className="form-group">
<label>Email:</label>
<input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
<label>Password:</label>
<input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<button type="submit" className="btn btn-primary">Register</button>
</form>
);
}

export default App;










  
  
  
  