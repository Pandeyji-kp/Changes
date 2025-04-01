import { createRoot } from 'react-dom/client'
import Home from './components/home'
import { BrowserRouter, Route, Routes } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/style.css';
import './assets/css/responsive.css';

import ProductDetail from './components/ProductDetail.jsx'
import ProductListing from './components/ProductListing.jsx'
import RootLayout from './components/RootLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Method - 1 */}
      {/* <Route path="/" element={<Home/>} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/product-detail" element={<ProductDetail />} /> */}

      {/* Method - 2 */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="Product-Listing/:slug?/:sub_slug?" element={<ProductListing />} />
        <Route path="Product-Detail/:id" element={<ProductDetail />} />
      </Route>

    </Routes>

  </BrowserRouter>,
)