import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create the root for the React app
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// Standard function declaration for rendering the app
function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Call the render function
renderApp();

