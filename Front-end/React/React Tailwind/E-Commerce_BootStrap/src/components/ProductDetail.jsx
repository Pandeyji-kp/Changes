import React from 'react'

export default function ProductDetail() {
  return (
    <>
      <div className="container my-5">
        <div className="row details-snippet1">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-2 mini-preview">
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg" alt="Preview" />
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg" alt="Preview" />
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg" alt="Preview" />
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg" alt="Preview" />
              </div>
              <div className="col-md-10">
                <div className="product-image">
                  <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858753_960_720.jpg" alt="Main Image" />
                </div>

              </div>
            </div>

          </div>
          <div className="col-md-5">
            <div className="category"><span className="theme-text">Category:</span> Women</div>
            <div className="title">Black Dress For Women</div>
            <div className="ratings my-2">
              <div className="stars d-flex">
                <div className="theme-text mr-2">Product Ratings: </div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div className="ml-2">(4.5) 50 Reviews</div>
              </div>
            </div>
            <div className="price my-2">$100.00 <strike className="original-price">$120.00</strike></div>
            <div className="theme-text subtitle">Brief Description:</div>
            <div className="brief-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta reiciendis odio consequuntur sunt magnam eum facilis quaerat dolor aperiam labore facere amet officiis, unde quae distinctio earum culpa omnis soluta voluptate tempora placeat?.
            </div>

            {/* <!-- TO REMOVE COLORS --> */}
            <div>
              <div className="subtitle my-3 theme-text">Colors:</div>
              <div className="select-colors d-flex">
                <div className="color red"></div>
                <div className="color silver"></div>
                <div className="color black"></div>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-3">
                <input type="number" className="form-control" defaultValue="1" />
              </div>
              <div className="col-md-9"><button className="btn addBtn btn-block bg-primary">Add to basket</button></div>
            </div>
          </div>
        </div>

        <div className="additional-details my-5 text-center">
          {/* <!-- Nav pills --> */}
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-tabs">
              <a className="nav-link active" data-toggle="tab" data-bs-toggle="tab" href="#home">Description</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#menu1">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#menu2">Specifications</a>
            </li>
          </ul>
        </div>

        {/* <!-- Tab panes --> */}
        <div className="tab-content mt-4 mb-3">
          <div className="tab-pane container active" id="home">
            <div className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni assumenda consectetur facere eius. Minus reprehenderit placeat ullam vel ab eaque sequi impedit, ipsum soluta temporibus fugit ipsa. Dolor libero modi molestiae dicta, vitae minus laborum error cum consequatur autem minima eveniet porro obcaecati quibusdam possimus eos, debitis sint magnam, explicabo accusantium aspernatur ipsa repellat tempore nihil. Cum placeat voluptate dignissimos dicta harum consectetur, nemo debitis tempore. Quod culpa perspiciatis unde natus. Modi expedita, ab repellendus reiciendis sed voluptate, culpa laborum ad, consectetur quas tempora quo? Quibusdam doloribus magnam maxime, accusamus officiis odit reiciendis labore laudantium. Molestiae corporis temporibus ad?
            </div>
          </div>
          <div className="tab-pane container fade" id="menu1">
            <div className="review">
              <p className='text-center'>PUT REVIEWS DESIGN HERE</p>
            </div>
          </div>
          <div className="tab-pane container fade" id="menu2">
            <div className="specification">
              <p className='text-center'>PUT SPECIFICATIONS HERE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}