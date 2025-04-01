import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import globe from '../assets/images/globe.png'
import tag from '../assets/images/tag.png'
import lock from '../assets/images/lock.png'
import { Link } from 'react-router-dom'
export default function Home() {

    var limit = 12

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=${limit}`)
            .then((response) => {
                setProducts(response.data.data)
            })
            .catch((error) => {

            })
    }, [])

    return (
        <>
            <div className="container-nike ">
                <div className="row nike">
                    <p className='text-center text-over'>Super value deals <br />
                        On all Products
                    </p>
                    <p className='text-over-small'>Discover the Latest Collection</p>
                    
                </div>
                <Link className="shop-now-btn" to="Product-Listing">Shop Now</Link>

            </div>
            

            <div className="products">
                <div className="container">
                    <h1 className="pt-5 pb-5 text-center fw-bold latest-heading">Latest Products</h1>

                    <div className="row">
                        
                        {
                            products.map((v, i) => {
                                return (
                                    <ProductCard key={i} productData={v} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="text-center home-line border mb-3 mt-5 "></div>
            <div className="globe-columns d-flex justify-content-evenly text-center">
                <div className="elementor-element elementor-element-3c31c17 e-con-full e-flex e-con e-child" data-id="3c31c17" data-element_type="container">
                    <div className="elementor-element elementor-element-f90815e elementor-position-top elementor-widget elementor-widget-image-box" data-id="f90815e" data-element_type="widget" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="120" height="120" src={globe} className="globe " alt="" /></figure><div className="elementor-image-box-content"><h5 className=" fw-bold fs-3">Worldwide Shipping</h5><p className="elementor-image-box-description">It elit tellus, luctus nec ullamcorper <br />  mattis, pulvinar dapibus leo.</p></div></div>     </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-6e1edd4 e-con-full e-flex e-con e-child" data-id="6e1edd4" data-element_type="container">
                    <div className="elementor-element elementor-element-ffca96f elementor-position-top elementor-widget elementor-widget-image-box" data-id="ffca96f" data-element_type="widget" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="120" height="120" src={tag} className="globe" alt="" /></figure><div className="elementor-image-box-content"><h5 className=" fw-bold fs-3">Best Offers</h5><p className="">It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.</p></div></div>      </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-0f2d2b3 e-con-full e-flex e-con e-child" data-id="0f2d2b3" data-element_type="container">
                    <div className="elementor-element elementor-element-1c8b07d elementor-position-top elementor-widget elementor-widget-image-box" data-id="1c8b07d" data-element_type="widget" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="120" height="120" src={lock} className="globe" alt="" /></figure><div className="elementor-image-box-content"><h5 className=" fw-bold fs-3">Secure Payments</h5><p className="elementor-image-box-description">It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.</p></div></div>     </div>
                    </div>
                </div>
            </div>
            <div className="text-center home-line border mb-3 mt-5 "></div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header  bg-primary">
                            <h5 className="modal-title text-light" id="exampleModalLabel">Sign In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    {/* <!--<label for="exampleInputEmail1">Email address</label>--> */}
                                    <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <div className="form-group">
                                        {/* <!--<label for="exampleInputPassword1">Password</label>--> */}
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup">
                            <p className="float-right text-muted">If not registered,<a href="register.html" className="text-muted"> register now!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}