import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import Navbar from 'mf_navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div>
      <Router />
    </div>
  </BrowserRouter>
);

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
