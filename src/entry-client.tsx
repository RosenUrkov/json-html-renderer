import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let data;

// eslint-disable-next-line
if (typeof window !== 'undefined' && (window as any).__data__) {
  // eslint-disable-next-line
  data = JSON.parse((window as any).__data__);
}

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>,
);
