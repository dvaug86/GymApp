import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// this is where our react application lives
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
