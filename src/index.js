import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import userContext from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

//context API
// const user = {
//   name: 'mehad',
//   email: 'mehad@optima.pk',
// };

root.render(
  // <userContext.Provider value={user}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </userContext.Provider>
);
