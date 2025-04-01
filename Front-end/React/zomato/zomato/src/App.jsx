import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './App.css'
import Footer from './comman/Footer'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
    <div className="imgdiv">
      <img src="image/img_1.avif"  alt="" />
      <div className='container'> 
        <ul>
          <li>Get the App</li>
        </ul>

        <ul>
          <li>Invester Relations</li>
          <li>Add restaurant</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
      
    </div>
      <div className="zomato">Zomato</div> 
      <div className="text">Discover the best food & drinks in Jodhpur</div>
      <div className="jodhpur">
        <Link to={'/jodhpur'}> Jodhpur </Link>
      </div>

    <div className="secimg">
      <img src="image/secimg1.png" alt="" className='m-4 '/>
      <img src="image/secimg2.png" alt="" className='m-4 '/>
      <div className="collection">Collection</div>  
      <div className='explore'>Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends</div> 
      <img src="image/secimg3.png" alt="" className='secimg_3'/>
      <div className="location">Popular localities in and around Jodhpur</div>
      <div className="places1">
      <div className="spot w-50  h-25">Sardarpura</div>
      <div className="spot w-50  h-25">Ratanada</div>
      <div className="spot w-50  h-25">Basani</div>
      </div>
      <div className="places2">
      <div className="spot w-50  h-25">Chopasani</div>
      <div className="spot w-50  h-25">Rawato ka bass</div>
      <div className="spot w-50  h-25">Shastri nagar</div>
      </div>
      <div className="social">
        Get the Zomato app 
      </div>
      <div className="message">
      We will send you a link, open it on your phone to download the app
      </div>
      <div className="form">
      <form action="#" method="POST">
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required/>
    <button type="submit">Submit</button>
     </form>
     </div>
     <div className=''>
      <img src="image/appstoreiconpng.png" alt="" className='iconimges'/>
      <img src="image/playstoreicon.png" alt="" className='iconimges'/>
     </div>
    </div> 

<div className="faq">
<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Popular Cuisines Near Me</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Popular Restaurant Types Near me</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Top Restaurant Chains</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Cities We Deliver To</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

</div>
    
<Footer/>

  </div> 
  
  )
}



export default App
