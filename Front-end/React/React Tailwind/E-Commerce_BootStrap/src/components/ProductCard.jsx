import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ productData, column }) {
    return (
        <>
            <div className={(column == 4) ? 'col-md-4' : 'col-md-3'} >
                <div className="shadow-lg  mb-5 bg-body-tertiary rounded card">
                    <img className=" card-img-top" src={productData.image} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text text-center"><Link to={`/product-detail/${productData.id}`} className="text-dark"><span><b>{productData.category_name}</b></span>
                            <br /><span>{productData.name}</span></Link></p>
                        <h4 className="pb-0 pt-0 text-center">${productData.price}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}