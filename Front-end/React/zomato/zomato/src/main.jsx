import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './comman/Footer.jsx';
import Jodhpur from './comman/Jodhpur.jsx';

const ws=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }
  ,
  {
    path:"/footer",
    element:<Footer/>
  }
  ,
  {
    path:"/jodhpur",
    element:<Jodhpur/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ws}/>
  </StrictMode>,
)
