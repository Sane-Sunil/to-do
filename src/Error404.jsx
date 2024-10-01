import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';
import Button from './button/button.jsx';

function Error404() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">The page you are looking for doesn't exist.</p>
      <Link to="/" className="not-found-link"><Button buttonText="Go back to Home" /></Link>
    </div>
  );
}

export default Error404;
