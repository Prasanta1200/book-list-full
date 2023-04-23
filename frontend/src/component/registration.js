import { useState } from 'react';
import axios from 'axios';
import './reg.css'

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('https://book-list-0jc2.onrender.com/register', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </label>
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
