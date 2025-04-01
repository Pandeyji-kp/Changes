import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/Components/Home'
import './assets/CSS/style.css'
import './assets/CSS/ShoppingCart.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
