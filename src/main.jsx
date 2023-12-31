import React from 'react'
import ReactDOM from 'react-dom/client'
// components & style
import App from './App.jsx'
import './index.css'
// routing
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
