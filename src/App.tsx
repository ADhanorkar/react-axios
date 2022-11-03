import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './post/PostForm';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          React - Axios Post Request
        </p>
        <PostForm />
      </header>
    </div>
  );
}

export default App;
