import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RootLayout from './layouts/RootLayout';
import './index.css'; 
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import AddColor from './pages/Color/AddColor';
import ViewColor from './pages/Color/ViewColor';
import AddSize from './pages/Size/AddSize';
import ViewSize from './pages/Size/ViewSize';
import AddCategory from './pages/Category/AddCategory';
import ViewCategory from './pages/Category/ViewCategory';
import AddSubCategory from './pages/SubCategory/AddSubCategory';
import ViewSubCategory from './pages/SubCategory/ViewSubCategory';
import AddProduct from './pages/Product/AddProduct';
import ViewProduct from './pages/Product/ViewProduct';
import StoryDetails from './pages/Story/StoryDetails';
import ViewStory from './pages/Story/viewStory';
import Orders from './pages/Orders/orders';
import SliderDetails from './pages/Sliders/sliderDetails';
import Viewslider from './pages/Sliders/viewslider';
import Profile from './pages/Profile';
import Meterials from './pages/Material/Meterials';
import ViewMeterials from './pages/Material/ViewMeterials';
import AddFaq from './pages/Faq/AddFaq';
import ViewFaq from './pages/Faq/ViewFaq';
import AddSubSubCategory from './pages/SubSubCategory/AddSubSubCategory';
import ViewSubSubCategory from './pages/SubSubCategory/ViewSubSubCategory';
import AddLocation from './pages/Location/AddLocation';
import ViewLocation from './pages/Location/ViewLocation';
import TestimonialAdd from './pages/Testimonial/TestimonialAdd';
import TestimonialView from './pages/Testimonial/TestimonialView';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/dashboard/color/add-color" element={<AddColor />} />
          <Route path="/dashboard/color/update/:id?" element={<AddColor />} />
          <Route path="/dashboard/color/view-color" element={<ViewColor />} />
          <Route path="/dashboard/size/add-size" element={<AddSize />} />
          <Route path="/dashboard/size/view-size" element={<ViewSize />} />
          <Route path="/dashboard/material/add-material" element={<Meterials />} />
          <Route path="/dashboard/material/update/:id?" element={<Meterials />} />
          <Route path="/dashboard/material/view-material" element={<ViewMeterials />} />
          <Route path="/dashboard/category/add-category" element={<AddCategory />} />
          <Route path="/dashboard/category/update/:id?" element={<AddCategory />} />
          <Route path="/dashboard/category/view-category" element={<ViewCategory />} />
          <Route path="/dashboard/subcategory/add-subcategory" element={<AddSubCategory/>} />
          <Route path="/dashboard/subcategory/update/:id?" element={<AddSubCategory/>} />
          <Route path="/dashboard/subcategory/view-subcategory" element={<ViewSubCategory/>} />
          <Route path="/dashboard/subsubcategory/add-subsubcategory" element={<AddSubSubCategory/>} />
          <Route path="/dashboard/subsubcategory/view-subsubcategory" element={<ViewSubSubCategory/>} />
          <Route path="/dashboard/location/add-location" element={<AddLocation/>} />
          <Route path="/dashboard/location/view-location" element={<ViewLocation/>} />
          <Route path="/dashboard/testimonial/add-testimonial" element={<TestimonialAdd/>} />
          <Route path="/dashboard/testimonial/view-testimonial" element={<TestimonialView/>} />
          <Route path="/dashboard/product/add-product" element={<AddProduct/>} />
          <Route path="/dashboard/product/view-product" element={<ViewProduct/>} />
          <Route path="/dashboard/Faq/add-Faq" element={<AddFaq />} />
          <Route path="/dashboard/Faq/update/:id?" element={<AddFaq />} />
          <Route path="/dashboard/Faq/view-Faq" element={<ViewFaq />} />
          <Route path="/dashboard/story/story-details" element={<StoryDetails/>} />
          <Route path="/dashboard/story/story-view" element={<ViewStory/>} />
          <Route path="/dashboard/order/order-view" element={<Orders/>} />
          <Route path="/dashboard/slider/slider-details" element={<SliderDetails/>} />
          <Route path="/dashboard/slider/slider-view" element={<Viewslider/>} />
        </Route>
        <Route/>
      </Routes>
  </BrowserRouter>
)
