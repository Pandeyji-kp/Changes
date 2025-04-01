import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import logo from '../assets/images/wslogo.svg'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((response) => {
                setCategories(response.data.data)
            })
            .catch((error) => {
                toast.error('Something went wrong !!');
            });
    }, []);

    return (
        <>
            <ToastContainer />
            <header className='container-fluid header-color sticky '>

                <div className="container ">
                    <div className="row ">
                        <div className="col-md-2 mt-2">
                            <Link className="navbar-brand" to="/"><img src={logo} alt="image of logo" className="img-fluid mt-2 " /></Link>
                        </div>

                        <div className="col-md-7 mt-2 search">
                            <div className="input-group mt-3">
                                <input type="text" className="form-control mt-2" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append mt-2 ">
                                    <button className="btn btn-primary searchlogo" type="button" id="button-addon2"><FaSearch className='mb-2 pt-1 fs-4' /></button>
                                </div>
                            </div>
                        </div>

                        <div className="LOGO col-md-3 mt-4 ">
                            <div className="circle logo-background float-right ms-5">
                                <FaUserTie className="fs-4 text-muted header-categoriy icon-hover" data-target="#exampleModal" data-toggle="modal" />
                                <span className="badge badge-danger">0</span>

                            </div>
                            <div className="circle logo-background float-right ms-4">
                                <FaShoppingCart className="fs-4 fo text-muted header-categoriy icon-hover" data-target="#exampleModal" data-toggle="modal" />
                                <span className="badge badge-danger">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='container-fluid header-color '>

                <div className="text-center home-line-play border mb-1  "></div>

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light " id="navbar">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="hover collapse navbar-collapse nav height" id="navbarNavDropdown">
                            <ul className="navbar-nav " id="nav">
                                <li className="nav-item active">
                                    <Link className="nav-link header-categoriy " to="/">Home <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link header-categoriy" to="Product-Listing">All <span className="sr-only"></span></Link>
                                </li>

                                {

                                    categories.map((v, i) => {
                                        return (

                                            (i < 9)

                                                ?
                                                <li className="nav-item" key={i}>
                                                    <Link className="nav-link header-categoriy" to={`Product-Listing/${v.slug}`}>{v.name}</Link>
                                                </li>
                                                :
                                                ''
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </nav>
                </div>
                <hr />
            </header>
        </>
    )
}