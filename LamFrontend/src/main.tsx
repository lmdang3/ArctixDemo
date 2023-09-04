import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render your App component */}
  </React.StrictMode>,
  document.getElementById('root') // Mount to the HTML element with id "root"
);