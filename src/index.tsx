import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Example from './example/Example'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <Example /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
